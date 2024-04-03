/* eslint-disable import/no-anonymous-default-export */
import { GanttChart } from "lucide-react";
import { Github } from 'lucide-react';

export default {
  logo: (
    <>
      <GanttChart size={20} />
      <span style={{ marginLeft: ".4em", fontWeight: 700 }}>My Docs</span>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – My Docs",
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
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: "Rechercher dans la doc...",
  },
  toc: {
    title: "Dans Cette Page",
    backToTop: true,
  },
  project: {
    link: 'https://github.com/SofRahmani/my-docs',
    icon: (
      <>
        <Github size={16} />
      </>
    ),
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/SofRahmani" target="_blank">
          Sofiane Rahmani
        </a>
        .
      </span>
    )
  }
};
