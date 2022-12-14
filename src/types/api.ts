// export type ImageProps = {
//   alternativeText: string
//   url: string
// }

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
  button: {
    label: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type techIcon = {
  title: string
  icon: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: techIcon[]
}

type concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: concept[]
}

type module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

// type SocialLink = {
//   title: string
//   url: string
// }

// export type AuthorProps = {
//   name: string
//   role: string
//   description: string
//   photo: {
//     url: string
//   }
//   socialLinks: SocialLink[]
// }

// export type SectionAboutUsProps = {
//   title: string
//   authors: AuthorProps[]
// }

export type Review = {
  id: number
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  text: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  // sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
