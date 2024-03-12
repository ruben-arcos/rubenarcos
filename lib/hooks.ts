import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
     // CONTEXT API
  const { ref, inView } = useInView({
    // in JS if you have same property name and value, you can only pass the name
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect synchronizes with the inView variable value
  // inView tell us our current state, and this updates our external system (located in the active section context file)
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
