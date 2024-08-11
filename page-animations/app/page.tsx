"use client"
import React, { useState } from 'react';
import AnimatedSVGsTab2 from '@/components/AnimatedSVGsTab2';
import { motion } from 'framer-motion';
import AnimatedSVGsTab1 from '@/components/AnimatedSVGsTab1';
import { CertifiedIcon, DocumentIcon, ExportAndShareIcon, FiltersIcon, ScanIcon } from '@/components/Icons';
import AnimatedSVGsTab3 from '@/components/AnimatedSVGsTab3';
import AnimatedSVGsTab4 from '@/components/AnimatedSVGsTab4';
import AnimatedSVGsTab5 from '@/components/AnimatedSVGsTab5';

export default function Home() {

  const tabs = [
    {
      id: 1, title: "Document Scanner", component: <AnimatedSVGsTab1 />, info: {
        title: "Scan with Ease",
        topTitle: "Document Scanner",
        desc: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
        butonLink: "/"
      },
      icon: <DocumentIcon />
    },
    {
      id: 2, title: "Sign & Stamp", component: <AnimatedSVGsTab2 />, info: {
        title: "One-Tap Focus",
        topTitle: "Sign & Stamp",
        desc: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
        butonLink: "/"
      },
      icon: <CertifiedIcon />
    },
    {
      id: 3, title: "Batch Scanning", component: <AnimatedSVGsTab3 />, info: {
        title: "Multiple Page Scan",
        topTitle: "Batch Scanning",
        desc: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
        butonLink: "/"
      },
      icon: <ScanIcon />
    },
    {
      id: 4, title: "Advanced Filters", component: <AnimatedSVGsTab4 />, info: {
        title: "Unique Filteres",
        topTitle: "Advanced fılters",
        desc: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
        butonLink: "/"
      },
      icon: <FiltersIcon />
    },
    {
      id: 5, title: "Export & Share", component: <AnimatedSVGsTab5 />, info: {
        title: "All-Round Conversion",
        topTitle: "export & share",
        desc: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
        butonLink: "/"
      },
      icon: <ExportAndShareIcon />
    }
  ];

  const [selectedId, setSelectedId] = useState(1);

  const returnContent = () => {

    const selected = tabs.find(i => i.id === selectedId);

    return <div className=" min-h-[calc(100vh-124px)] lg:min-h-0 flex flex-col justify-end lg:pt-[54px] lg:px-[70px] px-6 w-full lg:overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 items-center lg:gap-4 gap-y-8">
        <div className="col-span-1 order-2 lg:order-1 lg:pb-0 lg:mt-0">
          <div className="w-full lg:max-w-[610px] mx-auto flex items-center justify-center">
            <div className="relative z-10 w-full lg:max-w-[365px] lg:aspect-[365/510] max-w-[230px] aspect-[230/299] origin-bottom">
              {selected?.component}
            </div>
          </div>
        </div>
        <motion.div
          key={selected?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="col-span-1 lg:order-2 order-1 flex justift-center lg:items-end flex-col lg:text-right text-center">
          <div className="lg:max-w-[556px]">
            <h3 className='uppercase text-[#0381FF] mb-4 tracking-[2px] font-extrabold'>{selected?.info.topTitle}</h3>
            <h2 className='text-[32px] leading-[40px] text-primary-dark lg:mb-5 mb-[13px] font-bold'>{selected?.info.title}</h2>
            <p className='text-primary-bold lg:text-xl text-sm lg:leading-8 leading-[28px] mb-6 tracking-[0.8px]'>{selected?.info.desc}</p>
            <button className='text-xl border border-gray border-opacity-15 py-[15px] px-5'>Learn More</button>
          </div>
        </motion.div>
      </div>
    </div>
  }

  return (
    <>
      <div className='lg:min-h-screen max-w-[1440px] mx-auto flex flex-col justify-center bg-gray-100'>
        {returnContent()}
        <div className='flex fixed bottom-0 left-0 right-0 bg-white max-w-[1440px] lg:relative z-40 overflow-auto divide-x-2 divide-gray-100 shadow-sm'>
          {tabs.map((item, j) => (
            <div onClick={() => { setSelectedId(item.id) }} key={j} className={`${selectedId === item.id ? "bg-primary bg-opacity-10" : ""} text-xl cursor-pointer flex items-center w-[301px] h-[124px] justify-center whitespace-nowrap`}>
              <div className="flex items-center gap-x-4 px-4 ">
                <div
                  className={`relative border-2 w-[56px] h-[56px] rounded-full flex items-center justify-center ${selectedId === item.id ? "text-primary bg-white border-primary" : " text-gray border-gray-100"}`}
                >
                  {item.icon}
                </div>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div >

    </>
  );
}
