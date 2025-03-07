"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ServiceCard } from "./service-card";

const categories = [
    {
      name: "Ladies - Haircuts & Hairdressing",
      services: [
        { title: "Ladies - Wash, Haircut & Blow Dry", duration: "45 mins", price: "£35" },
        { title: "Ladies - Dry Haircut", duration: "30 mins", price: "£20" },
        { title: "Ladies - Cut & Blow Dry", duration: "30 mins", price: "£35" },
        { title: "Ladies - Hair Curls", duration: "30 mins", price: "from £25" },
        { title: "Ladies - Hair Straightening", duration: "30 mins", price: "£25" },
        { title: "Ladies - Restyle", duration: "1 hr", price: "£40" },
        { title: "Ladies - Wash, Haircut & Blow Dry (Afro Hair)", duration: "1 hr", price: "£50" }
      ]
    },
    {
      name: "Ladies - Hair Colouring",
      services: [
        { title: "Ladies - Full Head Colour with Blow Dry", duration: "2 hrs", price: "from £40" },
        { title: "Ladies - Root Colour with Blow Dry", duration: "1 hr 35 mins", price: "£35" }
      ]
    },
    {
      name: "Ladies - Highlights & Balayage",
      services: [
        { title: "Ladies - Full Head Highlights with Blow Dry", duration: "2 hrs", price: "£110" },
        { title: "Ladies - Balayage with Blow Dry", duration: "2 hrs 15 mins", price: "from £110" }
      ]
    },
    {
      name: "Hair Care Treatments",
      services: [
        { title: "Ladies - Keratin Treatment", duration: "2 hrs", price: "£200" },
        { title: "Ladies - Hair Smoothing Treatment", duration: "1 hr 30 mins", price: "£120" },
        { title: "Ladies - Hair Protein Treatment", duration: "1 hr", price: "£35" },
        { title: "Ladies - Olaplex Treatment", duration: "30 mins", price: "£35" },
        { title: "Ladies - Hair Conditioning Treatment", duration: "15 mins", price: "£25" }
      ]
    },
    {
      name: "Waxing",
      services: [
        { title: "Ladies' Waxing - Face", duration: "10 mins", price: "from £4" },
        { title: "Ladies' Waxing - Arm", duration: "15-20 mins", price: "from £10" },
        { title: "Ladies' Waxing - Leg", duration: "20-40 mins", price: "from £20" },
        { title: "Ladies' Waxing - Bikini", duration: "15 mins", price: "£20" },
        { title: "Ladies' Waxing - Full Body", duration: "1 hr 30 mins", price: "£70" }
      ]
    },
    {
      name: "Threading",
      services: [
        { title: "Eyebrow Threading", duration: "10 mins", price: "£5" },
        { title: "Upper Lips", duration: "10 mins", price: "£4" },
        { title: "Chin", duration: "10 mins", price: "£4" },
        { title: "Sides", duration: "10 mins", price: "£6" },
        { title: "Full Face", duration: "20 mins", price: "£20" }
      ]
    },
    {
      name: "Massage",
      services: [
        { title: "Full Body Massage", duration: "30 mins", price: "£40" },
        { title: "Back Massage", duration: "30 mins", price: "£25" },
        { title: "Leg Massage", duration: "30 mins", price: "£25" }
      ]
    },
    {
      name: "Body Spa Treatments",
      services: [
        { title: "Body Wrap", duration: "30 mins", price: "£60" },
        { title: "Body Scrub", duration: "30 mins", price: "£60" }
      ]
    },
    {
      name: "Makeup",
      services: [
        { title: "Bridal Makeup", duration: "1 hr", price: "£250" },
        { title: "Party Makeup", duration: "45 mins", price: "£45" }
      ]
    },
    {
      name: "Facials",
      services: [
        { title: "Facial - Pamper", duration: "1 hr", price: "£35" },
        { title: "Facial - Luxury", duration: "1 hr", price: "£45" },
        { title: "Facial - Hydra", duration: "1 hr", price: "£80" }
      ]
    },
    {
      name: "Nails",
      services: [
        { title: "Luxury Manicure", duration: "45 mins", price: "£20" },
        { title: "Luxury Pedicure", duration: "1 hr", price: "£35" },
        { title: "Gel Polish - Hands", duration: "30 mins", price: "£15" },
        { title: "Gel Polish - Toes", duration: "30 mins", price: "£20" },
        { title: "Gel Soak Off", duration: "20-40 mins", price: "from £10" }
      ]
    },
    {
      name: "Lashes & Brows",
      services: [
        { title: "Eyelash Extension", duration: "1 hr", price: "£55" },
        { title: "Lash Lift", duration: "45 mins", price: "£45" },
        { title: "Brow Lamination", duration: "45 mins", price: "£45" },
        { title: "Eyebrow Tint", duration: "10 mins", price: "£8" },
        { title: "Eyelash Tint", duration: "15 mins", price: "£8" }
      ]
    },
    {
      name: "Patch Test",
      services: [
        { title: "Patch Test - Hair Removal", duration: "5 mins", price: "£0" },
        { title: "Patch Test - Face", duration: "5 mins", price: "£0" }
      ]
    }
  ];

  export const ServiceCategories = ({ link }: { link: string }) => {
	const [expandedCategoryIndex, setExpandedCategoryIndex] = useState<number>(0);
  
	const toggleCategory = (index: number) => {
	  if (expandedCategoryIndex === index) {
		setExpandedCategoryIndex(-1);
	  } else {
		setExpandedCategoryIndex(index);
	  }
	};

	return (
		    <div className="mt-8 space-y-4 max-w-5xl mx-auto">
      {categories.map((category, index) => (
        <div key={category.name} className="border rounded-lg overflow-hidden">
         <button
            onClick={() => toggleCategory(index)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-left">{category.name}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm text-gray-500">{category.services.length} services</span>
              {expandedCategoryIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </button>
          
          {expandedCategoryIndex === index && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50">
              {category.services.map((service) => (
                <ServiceCard 
                  key={service.title}
                  title={service.title}
                  duration={service.duration}
                  price={service.price}
				  link={link}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
	  );
	}