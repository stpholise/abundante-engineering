import { PortableTextBlock } from "sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";

interface PortableTextComponentsProps {
  value: PortableTextBlock[];
}

const PortableTextComponent = ({ value }: PortableTextComponentsProps) => {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl font-bold my-2 text-[#262626]">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-sm   mb-1 mt-3 text-[#262626]">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-medium my-2 text-[#262626]">{children}</h3>
      ),
      normal: ({ children }) => <p className="my-1 text-sm text-[#7f7f8f]">{children}</p>,
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
