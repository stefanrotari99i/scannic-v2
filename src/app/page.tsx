"use client";

import { StockBar, StockDetails } from "@/components/dashboard.tsx/stock";
import { Tab, Tabs } from "@nextui-org/tabs";

import { Divider } from "@nextui-org/divider";
import { IconQrcode } from "@tabler/icons-react";
import { MetricCard } from "@/components/dashboard.tsx/metric-card";

export default function Home() {
  const stockData = [
    { percentage: 50, color: "bg-teal-500" },
    { percentage: 25, color: "bg-yellow-500" },
    { percentage: 25, color: "bg-rose-500" },
  ];

  const stockDetails = [
    { label: "In stock", value: 12, color: "teal" },
    { label: "Low stock", value: 50, color: "yellow" },
    { label: "Out of stock", value: 6, color: "rose" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex items-center w-full border-b px-6 py-4 border-neutral-200">
        <h1 className="text-xl font-bold">Menus</h1>
      </div>
      <div className="w-full px-6 py-10 flex items-center gap-10">
        <MetricCard
          icon={<IconQrcode size={26} />}
          label="Total QR-code scan"
          value="1,212"
        />
        <Divider orientation="vertical" className="h-16" />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">121</span>
            <span className="text-sm font-semibold text-gray-500">product</span>
          </div>
          <StockBar stockData={stockData} />
          <StockDetails stocks={stockDetails} />
        </div>
      </div>
      <div className="w-full   relative">
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="primary"
          className="font-bold border-b border-gray-300 w-full"
        >
          <Tab key="photos" title="Photos">
            dsadsad
          </Tab>
          <Tab key="music" title="Music">
            dasdsadsa
          </Tab>
          <Tab key="videos" title="Videos">
            dasdasd
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
