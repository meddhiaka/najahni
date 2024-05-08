"use server"
import { HeroHighlight, Highlight } from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/MovingCards"
import Hero from "@/components/ui/Hero";
import { DataTableDemo } from "@/components/ui/HomeTableDemo";
import { prisma } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import React from "react";


async function getCourses() {
  const data = await prisma.cour.findMany()
  console.log(data)
  return data
}

export default async function Home() {
  const data = await getCourses()
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="my-10 max-w-5xl mx-auto">
        <p className="text-6xl font-semibold my-6">Tous Les Cours</p>
        <DataTableDemo data={data} />
      </div>
      <div className="w-full flex justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "L'éducation est la clé pour ouvrir la porte dorée de la liberté.",
    name: "George Washington Carver",
    title: "Botaniste et Inventeur",
  },
  {
    quote:
      "في تونس ، التعليم ليس مجرد تعلم ، بل هو تمكين وتقدم.",
    name: "مجهول",
    title: "مواطن تونسي",
  },
  {
    quote:
      "Bizerte, une ville où l'histoire respire et où l'éducation favorise son avenir.",
    name: "Inconnu",
    title: "Résident Local",
  },
  {
    quote:
      "La beauté de la Tunisie ne réside pas seulement dans ses paysages, mais dans son engagement envers l'éducation.",
    name: "Anonyme",
    title: "Observateur",
  },
  {
    quote:
      "L'éducation est le phare guidant la Tunisie vers un avenir plus brillant.",
    name: "Habib Bourguiba",
    title: "Ancien Président de la Tunisie",
  },
  {
    quote:
      "في بنزرت ، كل زاوية تحمل قصة ، كل صفحة تحمل حلمًا.",
    name: "مجهول",
    title: "مؤرخ محلي",
  },
  {
    quote:
      "Le passé de la Tunisie illumine son présent, et l'éducation est le pont vers son avenir.",
    name: "Anonyme",
    title: "Défenseur de l'Éducation",
  },
  {
    quote:
      "Bizerte n'est pas seulement une ville; c'est un témoignage vivant du riche patrimoine de la Tunisie et de son engagement envers l'éducation.",
    name: "Inconnu",
    title: "Résident Local",
  },
  {
    quote:
      "L'éducation en Tunisie est la pierre angulaire sur laquelle repose le progrès de notre société.",
    name: "Leïla Ben Ali",
    title: "Ancienne Première Dame de la Tunisie",
  },
  {
    quote:
      "Dans les salles de classe de Bizerte, les échos du passé se mêlent aux aspirations de l'avenir.",
    name: "Inconnu",
    title: "Érudit en Éducation",
  },
  {
    quote:
      "Le voyage de la Tunisie vers la prospérité commence dans les salles de classe de sa jeunesse.",
    name: "Anonyme",
    title: "Militant de l'Éducation",
  },
  {
    quote:
      "في بنزرت ، يتداخل صدى الماضي مع طموحات المستقبل في الفصول الدراسية.",
    name: "مجهول",
    title: "عالم تعليمي محلي",
  },
  {
    quote:
      "L'éducation donne aux jeunes Tunisiens le pouvoir d'écrire leur propre destin et de façonner l'avenir de la nation.",
    name: "Anonyme",
    title: "Enthousiaste de l'Éducation",
  },
  {
    quote:
      "À Bizerte, les vents du changement soufflent à travers les couloirs de l'éducation, façonnant un avenir plus radieux.",
    name: "Inconnu",
    title: "Visionnaire Local",
  },
  {
    quote:
      "L'engagement de la Tunisie envers l'éducation témoigne de sa détermination au progrès et à la prospérité.",
    name: "Anonyme",
    title: "Analyste de l'Éducation",
  },
  {
    quote:
      "في بنزرت ، ليس التعليم مجرد مسألة أكاديمية ؛ بل هو أيضًا مسألة خلق شعور بالمجتمع والهوية.",
    name: "مجهول",
    title: "معلم محلي",
  },
  {
    quote:
      "La plus grande ressource de la Tunisie est sa jeunesse éduquée, façonnant un avenir rempli de possibilités.",
    name: "Anonyme",
    title: "Commentateur Social",
  },
  {
    quote:
      "Bizerte, une ville où le passé chuchote, le présent prospère, et l'avenir se déploie à travers l'éducation.",
    name: "Inconnu",
    title: "Historien Local",
  },
  {
    quote:
      "L'éducation est le fondement sur lequel la Tunisie construit son chemin vers le progrès et la prospérité.",
    name: "Rachid Ghannouchi",
    title: "Politicien Tunisien",
  },
  {
    quote:
      "في بنزرت ، يصاحب إيقاع الحياة لحن التعليم ، مما يخلق سيمفونية للتقدم.",
    name: "مجهول",
    title: "فيلسوف محلي",
  },
];