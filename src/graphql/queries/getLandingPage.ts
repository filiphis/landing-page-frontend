const GET_LANDING_PAGE = /* GraphQL */ `
  fragment Logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment Header on LandingPage {
    header {
      title
      description
      image {
        alternativeText
        url
      }
      button {
        label
        url
      }
    }
  }

  fragment SectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment SectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          alternativeText
          url
        }
        title
      }
    }
  }

  fragment SectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment SectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment SectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment SectionPricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  # fragment SectionAboutUs on LandingPage {
  #   sectionAboutUs {
  #     title
  #     authors {
  #       photo
  #       name
  #       role
  #       socialLinks {
  #         title
  #         url
  #       }
  #       description
  #     }
  #   }
  # }

  fragment SectionReviews on LandingPage {
    sectionReviews {
      id
      title
      reviews {
        photo {
          alternativeText
          url
        }
        name
        text
      }
    }
  }

  fragment SectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...Logo
      ...Header
      ...SectionAboutProject
      ...SectionTech
      ...SectionConcepts
      ...SectionModules
      ...SectionAgenda
      ...SectionPricingBox
      # ...SectionAboutUs
      ...SectionReviews
      ...SectionFaq
    }
  }
`

export default GET_LANDING_PAGE
