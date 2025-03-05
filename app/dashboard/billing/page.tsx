import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

function Billing() {
  return (
    <div className="p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Upgrade With Monthly Plan</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-6">
          <CardContent className="p-0 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">0$</span>
              <span className="text-sm text-gray-500 ml-1">/month</span>
            </div>

            <div className="space-y-3 w-full mb-6">
              <div className="flex items-center">
                <Check className="check" />
                <span>10,000 Words/Month</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>50+ Content Templates</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>Unlimited Download & Copy</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>1 Month of History</span>
              </div>
            </div>

            <Button 
            className="w-full bg-slate-600 hover:bg-slate-700 text-white" 
              disabled>
              Currently Active Plan
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="p-0 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Monthly</h2>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold bg-blue-100 px-2 rounded">9.99$</span>
              <span className="text-sm text-gray-500 ml-1">/month</span>
            </div>

            <div className="space-y-3 w-full mb-6">
              <div className="flex items-center">
                <Check className="check" />
                <span>1,00,000 Words/Month</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>50+ Template Access</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>Unlimited Download & Copy</span>
              </div>
              <div className="flex items-center">
                <Check className="check" />
                <span>1 Year of History</span>
              </div>
            </div>

            <Button className="w-full">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Billing;