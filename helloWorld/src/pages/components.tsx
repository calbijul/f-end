import { FC } from "react";
import Button from "../components/buttons";
import Card from "../components/cards";
import ImgCard from "../components/imgCard";

const Components: FC = () => {
  return (
    <div className="p-20 py-16">
      <div className="mb-8">
        <p className="font-playfair text-display-2xl-regular">Display 2XL Regular</p>
        <p className="font-playfair text-display-2xl-medium">Display 2XL Medium</p>
        <p className="font-playfair text-display-2xl-semibold">Display 2XL SemiBold</p>
        <p className="font-playfair text-display-2xl-bold">Display 2XL Bold</p>
        <p className="font-playfair text-display-2xl-italic">Display 2XL Italic</p>
      </div>

      <div className="mb-8">
        <p className="font-playfair text-display-xl-regular">Display XL Regular</p>
        <p className="font-playfair text-display-xl-medium">Display XL Medium</p>
        <p className="font-playfair text-display-xl-semibold">Display XL SemiBold</p>
        <p className="font-playfair text-display-xl-bold">Display XL Bold</p>
        <p className="font-playfair text-display-xl-italic">Display XL Italic</p>
      </div>

      <div className="mb-8">
        <p className="font-playfair text-display-lg-regular">Display LG Regular</p>
        <p className="font-playfair text-display-lg-medium">Display LG Medium</p>
        <p className="font-playfair text-display-lg-semibold">Display LG SemiBold</p>
        <p className="font-playfair text-display-lg-bold">Display LG Bold</p>
        <p className="font-playfair text-display-lg-italic">Display LG Italic</p>
      </div>

      <div className="mb-8">
        <p className="font-playfair text-display-md-regular">Display MD Regular</p>
        <p className="font-playfair text-display-md-medium">Display MD Medium</p>
        <p className="font-playfair text-display-md-semibold">Display MD SemiBold</p>
        <p className="font-playfair text-display-md-bold">Display MD Bold</p>
        <p className="font-playfair text-display-md-italic">Display MD Italic</p>
      </div>

      <div className="mb-8">
        <p className="font-playfair text-display-sm-regular">Display SM Regular</p>
        <p className="font-playfair text-display-sm-medium">Display SM Medium</p>
        <p className="font-playfair text-display-sm-semibold">Display SM SemiBold</p>
        <p className="font-playfair text-display-sm-bold">Display SM Bold</p>
        <p className="font-playfair text-display-sm-italic">Display SM Italic</p>
      </div>

      <div className="mb-8">
        <p className="font-playfair text-display-xs-regular">Display XS Regular</p>
        <p className="font-playfair text-display-xs-medium">Display XS Medium</p>
        <p className="font-playfair text-display-xs-semibold">Display XS SemiBold</p>
        <p className="font-playfair text-display-xs-bold">Display XS Bold</p>
        <p className="font-playfair text-display-xs-italic">Display XS Italic</p>
      </div>
 
      <div className="mb-8">
        <p className="font-outfit text-body-xl-light">Body XL Light</p>
        <p className="font-outfit text-body-xl-regular">Body XL Regular</p>
        <p className="font-outfit text-body-xl-medium">Body XL Medium</p>
        <p className="font-outfit text-body-xl-semibold">Body XL SemiBold</p>
        <p className="font-outfit text-body-xl-bold">Body XL Bold</p>
      </div>

      <div className="mb-8">
        <p className="font-outfit text-body-lg-light">Body LG Light</p>
        <p className="font-outfit text-body-lg-regular">Body LG Regular</p>
        <p className="font-outfit text-body-lg-medium">Body LG Medium</p>
        <p className="font-outfit text-body-lg-semibold">Body LG SemiBold</p>
        <p className="font-outfit text-body-lg-bold">Body LG Bold</p>
      </div>
  
      <div className="mb-8">
        <p className="font-outfit text-body-md-light">Body MD Light</p>
        <p className="font-outfit text-body-md-regular">Body MD Regular</p>
        <p className="font-outfit text-body-md-medium">Body MD Medium</p>
        <p className="font-outfit text-body-md-semibold">Body MD SemiBold</p>
        <p className="font-outfit text-body-md-bold">Body MD Bold</p>
      </div>

      <div className="mb-8">
        <p className="font-outfit text-body-sm-light">Body SM Light</p>
        <p className="font-outfit text-body-sm-regular">Body SM Regular</p>
        <p className="font-outfit text-body-sm-medium">Body SM Medium</p>
        <p className="font-outfit text-body-sm-semibold">Body SM SemiBold</p>
        <p className="font-outfit text-body-sm-bold">Body SM Bold</p>
        <p className="font-outfit text-body-sm-wider">Body SM Wider</p>
        <p className="font-outfit text-body-sm-widest">Body SM Widest</p>
      </div>

      <div className="mb-8">
        <p className="font-outfit text-body-xs-light">Body XS Light</p>
        <p className="font-outfit text-body-xs-regular">Body XS Regular</p>
        <p className="font-outfit text-body-xs-medium">Body XS Medium</p>
        <p className="font-outfit text-body-xs-semibold">Body XS SemiBold</p>
        <p className="font-outfit text-body-xs-bold">Body XS Bold</p>
      </div>

      <Button size="sm" text="Small Button" />
      <Button size="lg" text="Large Button" />
      <Card size="sm" text="Small Card" />
      <Card size="lg" text="Large Card" />
      <ImgCard size="lg" text="Hello World" image="img/mountain.jpg" />

      <div className="p-20 py-16 grid grid-cols-3 gap-8 justify-center">
      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow: '0 1px 2px rgba(17, 24, 39, 0.05)',
        }}
      >
        <p className="text-sm">Shadow XS</p>
      </div>

      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow:
            '0 1px 3px rgba(17, 24, 39, 0.10), 0 1px 2px rgba(17, 24, 39, 0.06)',
        }}
      >
        <p className="text-sm">Shadow SM</p>
      </div>

      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow:
            '0 4px 8px -2px rgba(17, 24, 39, 0.06), 0 2px 4px -2px rgba(17, 24, 39, 0.06)',
        }}
      >
        <p className="text-sm">Shadow MD</p>
      </div>

      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow:
            '0 12px 16px -4px rgba(17, 24, 39, 0.10), 0 4px 6px -2px rgba(17, 24, 39, 0.05)',
        }}
      >
        <p className="text-sm">Shadow LG</p>
      </div>

      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow:
            '0 20px 24px -4px rgba(17, 24, 39, 0.10), 0 8px 8px -4px rgba(17, 24, 39, 0.04)',
        }}
      >
        <p className="text-sm">Shadow XL</p>
      </div>

      <div
        className="w-32 h-32 bg-gray-200 text-center flex items-center justify-center"
        style={{
          boxShadow: '0 24px 48px -12px rgba(17, 24, 39, 0.20)',
        }}
      >
        <p className="text-sm">Shadow 2XL</p>
      </div>
    </div>
    </div>
  );
};

export default Components;
