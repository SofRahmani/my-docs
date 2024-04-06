/* eslint-disable import/no-anonymous-default-export */
import { GanttChart } from "lucide-react";
import { useRouter } from "next/router";

export default {
  logo: (
    <>
      <GanttChart size={20} />
      <span style={{ marginLeft: ".4em", fontWeight: 700 }}>My Docs</span>
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/docs/home") {
      return {
        titleTemplate: "%s – My Docs",
      };
    }
    return {
      titleTemplate: "My Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Sofiane Rahmani - My Docs" />
      <meta
        property="og:description"
        content="Documentation personnelle enrichie par mon apprentissage et mes expérience dans le développement web."
      />
    </>
  ),
  docsRepositoryBase: "https://github.com/SofRahmani/my-docs/discussions",
  editLink: {
    component: null,
  },
  search: {
    placeholder: "Rechercher dans la doc...",
  },
  toc: {
    title: "Dans Cette Page",
    backToTop: true,
  },
  project: {
    link: "https://github.com/SofRahmani/my-docs",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className=" text-slate-600 "
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </>
    ),
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/SofRahmani" target="_blank">
          Sofiane Rahmani
        </a>
        .
      </span>
    ),
  },
};
