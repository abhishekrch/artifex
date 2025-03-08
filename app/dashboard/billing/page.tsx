"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Loader2Icon } from "lucide-react";
import axios from "axios";
import { useContext, useState } from "react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Artifex",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.firstName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="p-6">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
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
              disabled
            >
              Currently Active Plan
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="p-0 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Monthly</h2>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold bg-blue-100 px-2 rounded">
                9.99$
              </span>
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

            <Button
              disabled={loading}
              className="w-full"
              onClick={() => CreateSubscription()}
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {userSubscription ? "Active Plan" : "Get Started"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Billing;