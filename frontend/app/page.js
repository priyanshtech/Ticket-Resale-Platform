import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Flow from "@/components/landing/Flow";
import CTA from "@/components/landing/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Solution />
            <Flow />
            <CTA />
        </>
    );
}
