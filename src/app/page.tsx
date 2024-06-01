import { TextGenerateEffect } from "@/components/animations/text-generate-effect";
import Content from "@/core/layouts/Content";
import { FC } from "react";
import {
  PiChartLineUpDuotone,
  PiCirclesThreeDuotone,
  PiCreditCardDuotone,
  PiRobotDuotone,
  PiSealQuestionDuotone,
  PiShieldCheckDuotone,
} from "react-icons/pi";

interface BenefitCardProps {
  icon: React.ReactNode;
  iconColor?: string;
  title: string;
  description: string;
}
const BenefitCard: FC<BenefitCardProps> = ({
  icon,
  iconColor,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex items-center gap-2">
        <span className={`text-4xl ${iconColor}`}>{icon}</span>
        <span className="font-semibold text-xl">{title}</span>
      </div>
      <span>{description}</span>
    </div>
  );
};

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard: FC<ProcessCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <p className="font-semibold text-xl">{title}</p>
      <span>{description}</span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Content className="flex flex-col items-center justify-center py-56 h-screen">
        <h1 className="text-6xl font-semibold tracking-tighter mb-10">
          Profixify
        </h1>
        <div className="w-7/12">
          <TextGenerateEffect words="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros. Aliquet risus feugiat in ante metus dictum. Netus et malesuada fames ac turpis. Urna id volutpat lacus laoreet." />
        </div>
      </Content>
      <Content className="flex flex-col justify-center items-center py-56 h-screen dark:bg-blue-950">
        <div className="w-10/12 flex flex-col items-center">
          <div className="rounded-lg bg-blue-200 text-blue-600 px-4 py-2 text-4xl font-light">
            More Benefits
          </div>
          <h1 className="text-6xl font-semibold tracking-tighter my-5 mb-10">
            Profixify at your fingertips
          </h1>
          <div className="grid grid-cols-3">
            <BenefitCard
              icon={<PiChartLineUpDuotone />}
              iconColor="text-purple-600"
              title="Analytics"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BenefitCard
              icon={<PiCirclesThreeDuotone />}
              iconColor="text-green-600"
              title="Collaboration"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BenefitCard
              icon={<PiRobotDuotone />}
              iconColor="text-orange-600"
              title="Automation"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BenefitCard
              icon={<PiShieldCheckDuotone />}
              iconColor="text-red-400"
              title="Secure & Reliable"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BenefitCard
              icon={<PiCreditCardDuotone />}
              iconColor="text-gray-600"
              title="Affordable"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BenefitCard
              icon={<PiSealQuestionDuotone />}
              iconColor="text-blue-600"
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </Content>
      <Content className="flex flex-col justify-center items-center py-56 h-screen dark:bg-purple-950">
        <div className="rounded-lg bg-purple-200 text-purple-600 px-4 py-2 text-4xl font-light">
          Our Process
        </div>
        <h1 className="text-6xl font-semibold tracking-tighter my-5 mb-10">
          How does it work?
        </h1>
        <div className="grid grid-cols-3">
          <ProcessCard
            title="Create account"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
          />
          <ProcessCard
            title="Select a plan"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
          />
          <ProcessCard
            title="Start managing"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
          />
        </div>
      </Content>
    </>
  );
}
