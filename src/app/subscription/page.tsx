"use client";

import { useState } from "react";
import { styles } from "../styles";

type Props = {};

const Page = (props: Props) => {
  const monthlyPlans = [
    {
      title: "Mobile",
      monthlyPrice: "100",
      videoQuality: "Good",
      resolution: "480p",
      devices: ["Phone", "Tablet"],
    },
    {
      title: "Basic",
      monthlyPrice: "200",
      videoQuality: "Good",
      resolution: "480p",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      title: "Standard",
      monthlyPrice: "500",
      videoQuality: "Better",
      resolution: "1080p",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      title: "Premium",
      monthlyPrice: "700",
      videoQuality: "Best",
      resolution: "4k+ HDR",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
  ];
  const yearlyPlans = [
    {
      title: "Mobile",
      monthlyPrice: "1000",
      videoQuality: "Good",
      resolution: "480p",
      devices: ["Phone", "Tablet"],
    },
    {
      title: "Basic",
      monthlyPrice: "2000",
      videoQuality: "Good",
      resolution: "480p",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      title: "Standard",
      monthlyPrice: "5000",
      videoQuality: "Better",
      resolution: "1080p",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      title: "Premium",
      monthlyPrice: "7000",
      videoQuality: "Best",
      resolution: "4k+ HDR",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
  ];

  const [planType, setPlanType] = useState<string>("monthly");
  const [planId, setPlanId] = useState<number>(0);

  return (
    <div className="grid place-items-center w-full h-screen text-blue-900 bg-white">
      <div className="w-[80%]">
        <h3 className={styles.title}>Choose the right plan for you</h3>
        <div className="flex flex-row my-5">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row bg-blue-900 rounded-full p-2 gap-3 my-[20px] justify-center">
              <div
                className={
                  planType === "monthly"
                    ? "text-blue-900 bg-white rounded-full px-3 cursor-pointer transition-all"
                    : "text-white bg-blue-900 rounded-full px-3 cursor-pointer transition-all"
                }
                onClick={() => setPlanType("monthly")}
              >
                Monthly
              </div>
              <div
                className={
                  planType === "yearly"
                    ? "text-blue-900 bg-white rounded-full px-2 cursor-pointer transition-all"
                    : "text-white bg-blue-900 rounded-full px-2 cursor-pointer transition-all"
                }
                onClick={() => setPlanType("yearly")}
              >
                Yearly
              </div>
            </div>
            <div className="flex flex-col text-center ">
              <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                Monthly Price
              </p>
              <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                Video Quality
              </p>
              <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                Resolution
              </p>
              <p className="my-2 ">Devices you can use to watch</p>
            </div>
          </div>

          {planType === "monthly"
            ? monthlyPlans.map((plan: any, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col text-center flex-1 items-center cursor-pointer  ${
                    planId === index ? "font-semibold" : "text-gray-500"
                  } `}
                  onClick={() => setPlanId(index)}
                >
                  <p
                    className={`p-2   grid place-content-center h-[80px] w-[80px] ${
                      planId === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-300 "
                    }`}
                  >
                    {plan.title}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available] ">
                    Rs. {plan.monthlyPrice}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                    {plan.videoQuality}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                    {plan.resolution}
                  </p>
                  {plan.devices.map((device: string, index: number) => (
                    <p key={index} className="my-2 ">
                      {device}
                    </p>
                  ))}
                </div>
              ))
            : yearlyPlans.map((plan: any, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col text-center flex-1 items-center cursor-pointer  ${
                    planId === index ? "font-semibold" : "text-gray-500"
                  } `}
                  onClick={() => setPlanId(index)}
                >
                  <p
                    className={`p-2   grid place-content-center h-[80px] w-[80px] ${
                      planId === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-300 "
                    }`}
                  >
                    {plan.title}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available] ">
                    Rs. {plan.monthlyPrice}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                    {plan.videoQuality}
                  </p>
                  <p className="my-2 border-b-2 py-2 w-[-webkit-fill-available]">
                    {plan.resolution}
                  </p>
                  {plan.devices.map((device: string, index: number) => (
                    <p key={index} className="my-2 ">
                      {device}
                    </p>
                  ))}
                </div>
              ))}
        </div>
        <button className={styles.button}>Next</button>
      </div>
    </div>
  );
};

export default Page;
