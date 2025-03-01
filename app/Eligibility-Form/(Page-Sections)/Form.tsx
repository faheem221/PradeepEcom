"use client";
import React from "react";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { ArrowRight } from "@phosphor-icons/react";

const Form = () => {
  const Gender = [
    { key: "Male", label: "Male" },
    { key: "Female", label: "Female" },
    { key: "Other", label: "Other" },
  ];
  return (
    <div className="">
      <div className="container">
        <h1 className="text-3xl font-WorkSans font-[500]">Eligibility Form</h1>

        <form>
          <div>
            <h2 className="font-grotesk text-lg text-slate-500 mt-5">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
              <div>
                {/* Name Input */}
                <label>Full Name</label>
                <Input className="mt-1" placeholder={"Enter your name"} />
              </div>
              <div>
                {/* Email */}
                <label>Email</label>
                <Input className="mt-1" placeholder={"Enter your email"} />
              </div>
              <div>
                {/* Phone */}
                <label>Phone</label>
                <Input className="mt-1" placeholder={"Enter your phone"} />
              </div>
              <div>
                {/* DoB */}
                <label>Date of Birth</label>
                <Input className="mt-1" placeholder={"Enter your DoB"} />
              </div>
              <div>
                {/* Gender */}
                <label>Select Gender</label>
                <Select className="w-full mt-1" placeholder="Select a Gender ">
                  {Gender.map((gender, idx) => (
                    <SelectItem key={idx}>{gender.label}</SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                {/* State */}
                <label>State</label>
                <Input className="mt-1" placeholder={"Enter your State"} />
              </div>
              <div>
                {/* DoB */}
                <label>City</label>
                <Input className="mt-1" placeholder={"Enter your City"} />
              </div>
              <div>
                {/* Pincode */}
                <label>Pincode</label>
                <Input className="mt-1" placeholder={"Enter your Pincode"} />
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Button color="primary" className="mt-5 min-w-[4rem] rounded-full">
              <ArrowRight className="text-2xl" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
