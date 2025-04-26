"use client";
import React, { ChangeEvent, useState } from "react";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { DateValue } from "@internationalized/date";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { DatePicker } from "@heroui/date-picker";
import "@/app/globals.css";

const Gender = [
  { key: "Male", label: "Male" },
  { key: "Female", label: "Female" },
  { key: "Other", label: "Other" },
];
interface PersonalDetailsForm {
  fullName: string;
  email: string;
  phone: string;
  dob: DateValue | null;
  gender: string;
  state: string;
  city: string;
  pincode: string;
  schoolName10: string;
  boardName10: string;
  marks10: string;
  CGPA10: string;
  schoolName12: string;
  boardName12: string;
  marks12: string;
  CGPA12: string;
  subject12: string;
  passingYear10: string;
  passingYear12: string;
  InstituteName: string;
  collegeName: string;
  collegePercentage: string;
  collegeCommencementYear: string;
  collegePassingYear: string;
  collegeMarks: string;
  collegeLevel: string;
}

interface PersonalDetailsErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  state?: string;
  city?: string;
  pincode?: string;
  schoolName10?: string;
  boardName10?: string;
  marks10?: string;
  CGPA10?: string;
  schoolName12?: string;
  boardName12?: string;
  marks12?: string;
  CGPA12?: string;
  subject12?: string;
  passingYear10?: string;
  passingYear12?: string;
  InstituteName?: string;
  collegeName?: string;
  collegePercentage?: string;
  collegeCommencementYear?: string;
  collegePassingYear?: string;
  collegeMarks?: string;
  collegeLevel?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<PersonalDetailsForm>({
    fullName: "",
    email: "",
    phone: "",
    dob: null,
    gender: "",
    state: "",
    city: "",
    pincode: "",
    schoolName10: "",
    boardName10: "",
    marks10: "",
    CGPA10: "",
    schoolName12: "",
    boardName12: "",
    marks12: "",
    CGPA12: "",
    subject12: "",
    passingYear10: "",
    passingYear12: "",
    InstituteName: "",
    collegeName: "",
    collegePercentage: "",
    collegeCommencementYear: "",
    collegePassingYear: "",
    collegeMarks: "",
    collegeLevel: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors: PersonalDetailsErrors = {};

    // Basic Info Validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    if (!formData.gender) newErrors.gender = "Gender is required";

    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits";

    // 10th Grade Validation
    if (!formData.schoolName10.trim())
      newErrors.schoolName10 = "10th School Name is required";
    if (!formData.schoolName12.trim())
      newErrors.schoolName12 = "12th School Name is required";
    if (!formData.passingYear10.trim())
      newErrors.passingYear10 = "10th passing year is required";
    if (!formData.passingYear12.trim())
      newErrors.passingYear12 = "12th passing year is required";
    if (!formData.marks10.trim()) newErrors.marks10 = "10th marks is required";
    if (!formData.marks12.trim()) newErrors.marks12 = "12th marks is required";
    if (!formData.boardName10)
      newErrors.boardName10 = "10th Board name is required";
    if (!formData.boardName12)
      newErrors.boardName12 = "12th Board name is required";
    if (!formData.CGPA10) newErrors.CGPA10 = "10th CGPA is required";
    if (!formData.CGPA12) newErrors.CGPA12 = "12th CGPA is required";
    if (!formData.InstituteName)
      newErrors.InstituteName = "Institute Name  is required";
    if (!formData.collegeName)
      newErrors.collegeName = "College Name  is required";
    if (!formData.collegePercentage)
      newErrors.collegePercentage = "Percentage  is required";
    if (!formData.collegeCommencementYear)
      newErrors.collegeCommencementYear = "Commencement Year is required";
    if (!formData.collegePassingYear)
      newErrors.collegePassingYear = "Passing Year is required";
    if (!formData.collegeMarks) newErrors.collegeMarks = "Marks is required";
    if (!formData.collegeLevel) newErrors.collegeLevel = "Level is required";
    if (!formData.subject12) newErrors.subject12 = "Subject is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangePersonalDetails = (
    field: keyof PersonalDetailsForm,
    value: string | Date | DateValue | null | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };
  return (
    <div className="bg-slate-100">
      <div className=" pb-7 max-w-4xl mx-auto min-h-[600px] bg-white">
        <h2 className="p-7 text-center text-3xl">Eligibilty Form</h2>

        <Accordion variant="splitted" defaultExpandedKeys={["1"]} className="">
          <AccordionItem
            title={"Personal Details"}
            key={1}
            aria-label="Personal Details"
            className=" rounded-lg shadow-sm border border-slate-100"
          >
            <PersonalDetails
              formData={formData}
              handleChangePersonalDetails={handleChangePersonalDetails}
              errors={errors}
            />
          </AccordionItem>
          <AccordionItem
            title={"Academic Qualifications"}
            key={2}
            aria-label="Academic Qualifications"
            className=" rounded-lg shadow-sm border border-slate-100"
          >
            <AcademicQualifications
              formData={formData}
              handleChangePersonalDetails={handleChangePersonalDetails}
              errors={errors}
            />
          </AccordionItem>
          <AccordionItem
            title={"College Qualifications"}
            key={3}
            aria-label="College Qualifications"
            className=" rounded-lg shadow-sm border border-slate-100"
          >
            <CollegeQualification
              formData={formData}
              handleChangePersonalDetails={handleChangePersonalDetails}
              errors={errors}
            />
          </AccordionItem>
        </Accordion>

        <div className="mt-5 px-2 flex justify-end">
          <Button onPress={() => handleSubmit()} color="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
interface PersonalDetailsProps {
  handleChangePersonalDetails: (
    field: keyof PersonalDetailsForm,
    value: string | Date | DateValue | null | ChangeEvent<HTMLSelectElement>
  ) => void;
  formData: PersonalDetailsForm;
  errors: Partial<PersonalDetailsForm>;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  handleChangePersonalDetails,
  formData,
  errors,
}) => {
  console.log(formData.gender);
  return (
    <div className="w-full px-3 py-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <Input
            label={"Full Name"}
            labelPlacement="outside"
            name="fullName"
            value={formData.fullName}
            onChange={(e) =>
              handleChangePersonalDetails("fullName", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.fullName}
            errorMessage={errors.fullName}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Input
            name="Email"
            labelPlacement="outside"
            label={"Email"}
            value={formData.email}
            onChange={(e) =>
              handleChangePersonalDetails("email", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.email}
            errorMessage={errors.email}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Input
            name="phone"
            label={"Phone"}
            labelPlacement="outside"
            value={formData.phone}
            onChange={(e) =>
              handleChangePersonalDetails("phone", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.phone}
            errorMessage={errors.phone}
            placeholder="Enter your phone"
          />
        </div>

        <div>
          <DatePicker
            name="dob"
            label={"Select dob"}
            labelPlacement="outside"
            onChange={(value) => handleChangePersonalDetails("dob", value)}
            value={formData.dob}
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.dob}
            errorMessage={errors.dob as React.ReactNode}
          />
        </div>

        <div>
          <Select
            label={"Select Gender"}
            variant="bordered"
            labelPlacement="outside"
            size={"md"}
            radius="sm"
            isInvalid={!!errors.gender}
            errorMessage={errors.gender}
            className="w-full mt-1"
            placeholder="Select a Gender"
            onChange={(value) =>
              handleChangePersonalDetails("gender", value.target.value)
            }
            selectedKeys={[formData.gender]}
          >
            {Gender.map((gender) => (
              <SelectItem key={gender.key}>{gender.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <Input
            label={"State"}
            labelPlacement="outside"
            name="state"
            value={formData.state}
            onChange={(e) =>
              handleChangePersonalDetails("state", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.state}
            errorMessage={errors.state}
            placeholder="Enter your State"
          />
        </div>

        <div>
          <Input
            label={"City"}
            labelPlacement="outside"
            name="city"
            value={formData.city}
            onChange={(e) =>
              handleChangePersonalDetails("city", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.city}
            errorMessage={errors.city}
            placeholder="Enter your City"
          />
        </div>

        <div>
          <Input
            name="pincode"
            label={"Pincode"}
            labelPlacement="outside"
            value={formData.pincode}
            onChange={(e) =>
              handleChangePersonalDetails("pincode", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.pincode}
            errorMessage={errors.pincode}
            placeholder="Enter your Pincode"
          />
        </div>
      </div>
    </div>
  );
};

const AcademicQualifications: React.FC<PersonalDetailsProps> = ({
  handleChangePersonalDetails,
  formData,
  errors,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => {
    const year = 2000 + i;
    return { label: `Year ${year}`, value: year };
  });

  const subject = [
    {
      label: "Science (Computer Science)",
      value: "Science (Computer Science)",
    },
    {
      label: "Science (Physics, Chemistry and Biology)",
      value: "Science (Physics, Chemistry and Biology)",
    },
    {
      label: "Science (Physics, Chemistry and Maths)",
      value: "Science (Physics, Chemistry and Maths)",
    },
    {
      label: "Commerce with Maths",
      value: "Commerce with Maths",
    },
    {
      label: "Commerce without Maths",
      value: "Commerce without Maths",
    },
    {
      label: "Arts",
      value: "Arts",
    },
  ];
  const educationBoards = [
    { label: "Central Board of Secondary Education (CBSE)", value: "cbse" },
    {
      label: "Indian Certificate of Secondary Education (ICSE)",
      value: "icse",
    },
    { label: "State Board", value: "state-board" },
    { label: "National Institute of Open Schooling (NIOS)", value: "nios" },
    { label: "International Baccalaureate (IB)", value: "ib" },
    { label: "Cambridge International (IGCSE)", value: "igcse" },
    { label: "Other", value: "other" },
  ];
  return (
    <div className="w-full px-3 py-4 bg-white">
      <h2 className="w-full rounded-lg p-2 bg-slate-100">10th</h2>
      <div className="grid mt-3 grid-cols-1 gap-8 ">
        <div className="flex flex-col gap-4">
          <div>
            {/* School name Input */}
            <Input
              label={"School Name"}
              labelPlacement="outside"
              name="schoolName10"
              value={formData.schoolName10}
              onChange={(e) =>
                handleChangePersonalDetails("schoolName10", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.schoolName10}
              errorMessage={errors.schoolName10}
              placeholder={"Enter your School name"}
            />
          </div>
          <div>
            {/* Board name Input */}
            <Select
              label={"Board Name"}
              labelPlacement="outside"
              variant="bordered"
              size={"md"}
              radius="sm"
              isInvalid={!!errors.boardName10}
              errorMessage={errors.boardName10}
              className="w-full mt-1"
              placeholder="Select your board"
              onChange={(value) =>
                handleChangePersonalDetails("boardName10", value)
              }
              value={formData.boardName10}
            >
              {educationBoards.map((sub) => (
                <SelectItem key={sub.label}>{sub.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            {/* Year of Passing name Input */}
            <Select
              label={"Year of passing"}
              labelPlacement="outside"
              variant="bordered"
              size={"md"}
              radius="sm"
              isInvalid={!!errors.passingYear10}
              errorMessage={errors.passingYear10}
              className="w-full mt-1"
              placeholder="Select a Year"
              onChange={(value) =>
                handleChangePersonalDetails("passingYear10", value.target.value)
              }
              selectedKeys={[formData.passingYear10]}
            >
              {years.map((year, idx) => (
                <SelectItem key={idx}>{year.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            {/* Year of Passing Input */}
            <Input
              label={"Marks obtained"}
              labelPlacement="outside"
              name="marks10"
              value={formData.marks10}
              onChange={(e) =>
                handleChangePersonalDetails("marks10", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.marks10}
              errorMessage={errors.marks10}
              placeholder={"Enter Marks obtained"}
            />
          </div>
          <div>
            {/* Percentage Input */}
            <Input
              label={"Percentage / CGPA"}
              labelPlacement="outside"
              name="CGPA10"
              value={formData.CGPA10}
              onChange={(e) =>
                handleChangePersonalDetails("CGPA10", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.CGPA10}
              errorMessage={errors.CGPA10}
              placeholder={"Enter your CGPA gained"}
            />
          </div>
        </div>
        <h2 className="w-full rounded-lg p-2 bg-slate-100">12th</h2>
        <div className="flex flex-col gap-4">
          <div>
            {/* School name Input */}
            <Input
              label={"School Name"}
              labelPlacement="outside"
              name="schoolName12"
              value={formData.schoolName12}
              onChange={(e) =>
                handleChangePersonalDetails("schoolName12", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.schoolName12}
              errorMessage={errors.schoolName12}
              placeholder={"Enter your School name"}
            />
          </div>
          <div>
            {/* Board name Input */}
            <Select
              label={"Board Name"}
              labelPlacement="outside"
              variant="bordered"
              size={"md"}
              radius="sm"
              isInvalid={!!errors.boardName12}
              errorMessage={errors.boardName12}
              className="w-full mt-1"
              placeholder="Select your board"
              onChange={(value) =>
                handleChangePersonalDetails("boardName12", value.target.value)
              }
              selectedKeys={[formData.boardName12]}
            >
              {educationBoards.map((sub, idx) => (
                <SelectItem key={idx}>{sub.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            {/* Year of Passing name Input */}
            <Select
              label={"Year of passing"}
              labelPlacement="outside"
              variant="bordered"
              size={"md"}
              radius="sm"
              isInvalid={!!errors.passingYear12}
              errorMessage={errors.passingYear12}
              className="w-full mt-1"
              placeholder="Select a Year"
              onChange={(value) =>
                handleChangePersonalDetails("passingYear12", value.target.value)
              }
              selectedKeys={[formData.passingYear12]}
            >
              {years.map((year, idx) => (
                <SelectItem key={idx}>{year.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            {/* Year of Passing Input */}
            <Input
              label={"Marks obtained"}
              labelPlacement="outside"
              name="marks12"
              value={formData.marks12}
              onChange={(e) =>
                handleChangePersonalDetails("marks12", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.marks12}
              errorMessage={errors.marks12}
              placeholder={"Enter your marks obitained"}
            />
          </div>
          <div>
            {/* Percentage Input */}

            <Input
              label={"Percentage / CGPA"}
              labelPlacement="outside"
              name="CGPA12"
              value={formData.CGPA12}
              onChange={(e) =>
                handleChangePersonalDetails("CGPA12", e.target.value)
              }
              className="mt-1 w-full"
              variant="bordered"
              radius="sm"
              size="md"
              isInvalid={!!errors.CGPA12}
              errorMessage={errors.CGPA12}
              placeholder={"Enter your CGPA gained"}
            />
          </div>
          <div>
            {/* Percentage Input */}

            <Select
              label={"Subject"}
              labelPlacement="outside"
              variant="bordered"
              size={"md"}
              radius="sm"
              isInvalid={!!errors.subject12}
              errorMessage={errors.subject12}
              className="w-full mt-1"
              placeholder="Select subject"
              onChange={(value) =>
                handleChangePersonalDetails("subject12", value.target.value)
              }
              selectedKeys={[formData.subject12]}
            >
              {subject.map((sub, idx) => (
                <SelectItem key={idx}>{sub.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
const CollegeQualification: React.FC<PersonalDetailsProps> = ({
  handleChangePersonalDetails,
  formData,
  errors,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => {
    const year = 2000 + i;
    return { label: `Year ${year}`, value: year };
  });
  return (
    <div className="w-full px-3 py-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div>
          {/* Name Input */}
          <Input
            label={"Institute Name"}
            labelPlacement="outside"
            name="Institute Name"
            value={formData.InstituteName}
            onChange={(e) =>
              handleChangePersonalDetails("InstituteName", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.InstituteName}
            errorMessage={errors.InstituteName}
            placeholder="Enter your Institute name"
          />
        </div>
        <div>
          {/* Email */}
          <Input
            label={"College Name"}
            labelPlacement="outside"
            name="Collge Name"
            value={formData.collegeName}
            onChange={(e) =>
              handleChangePersonalDetails("collegeName", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.collegeName}
            errorMessage={errors.collegeName}
            placeholder="Enter your college name"
          />
        </div>
        <div>
          {/* Phone */}
          <Select
            label={"Year of Commencement"}
            labelPlacement="outside"
            variant="bordered"
            size={"md"}
            radius="sm"
            isInvalid={!!errors.collegeCommencementYear}
            errorMessage={errors.collegeCommencementYear}
            className="w-full mt-1"
            placeholder="Select a Year"
            onChange={(value) =>
              handleChangePersonalDetails("collegeCommencementYear", value.target.value)
            }
            selectedKeys={[formData.collegeCommencementYear]}
          >
            {years.map((year, idx) => (
              <SelectItem key={idx}>{year.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div>
          {/* DoB */}

          <Input
            label={"Level"}
            labelPlacement="outside"
            name="level"
            value={formData.collegeLevel}
            onChange={(e) =>
              handleChangePersonalDetails("collegeLevel", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.collegeLevel}
            errorMessage={errors.collegeLevel}
            placeholder="Enter your Level"
          />
        </div>
        <div>
          {/* Gender */}
          <Select
            label={"Year of Passing"}
            labelPlacement="outside"
            variant="bordered"
            size={"md"}
            radius="sm"
            isInvalid={!!errors.collegePassingYear}
            errorMessage={errors.collegePassingYear}
            className="w-full mt-1"
            placeholder="Select a Year"
            onChange={(value) =>
              handleChangePersonalDetails("collegePassingYear", value.target.value)
            }
            selectedKeys={[formData.collegePassingYear]}
          >
            {years.map((year, idx) => (
              <SelectItem key={idx}>{year.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div>
          {/* DoB */}
          <Input
            label={"Marks Obtained"}
            labelPlacement="outside"
            name="marks obtained"
            value={formData.collegeMarks}
            onChange={(e) =>
              handleChangePersonalDetails("collegeMarks", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.collegeMarks}
            errorMessage={errors.collegeMarks}
            placeholder="Enter your marks"
          />
        </div>
        <div>
          {/* DoB */}
          <Input
            label={"Percentage"}
            labelPlacement="outside"
            name="Percentage"
            value={formData.collegePercentage}
            onChange={(e) =>
              handleChangePersonalDetails("collegePercentage", e.target.value)
            }
            className="mt-1 w-full"
            variant="bordered"
            radius="sm"
            size="md"
            isInvalid={!!errors.collegePercentage}
            errorMessage={errors.collegePercentage}
            placeholder="Enter your percentage"
          />
        </div>
      </div>
    </div>
  );
};
