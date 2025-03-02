import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import ClientHistoryTable from "./_components/ClientHistoryTable";

async function fetchWithRetry(
  fn: () => Promise<any>,
  retries = 3,
  delay = 1000
) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export default async function HistoryPage() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress || "";

  try {
    const historyItems = await fetchWithRetry(async () => {
      return await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, userEmail))
        .orderBy(AIOutput.id);
    });

    const processedItems = historyItems.map(
      (item: {
        id?: number;
        templateSlug?: string;
        aiResponse?: string;
        createdAt?: string;
      }) => ({
        id: item.id?.toString() || "",
        template: item.templateSlug || "",
        aiResponse: item.aiResponse || "",
        createdAt: item.createdAt || "",
        wordCount: (item.aiResponse || "").split(/\s+/).length,
      })
    );

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">History</h1>
        <p className="text-gray-500 mb-6">
          Search your previously generated AI content
        </p>

        <Card>
          <CardContent className="p-0">
            <ClientHistoryTable historyItems={processedItems} />
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Database error:", error);
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">History</h1>
        <p className="text-gray-500 mb-6">
          Search your previously generated AI content
        </p>
        <Card>
          <CardContent className="p-4">
            <p className="text-red-500">
              Error loading history data. Please try again later.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
}
