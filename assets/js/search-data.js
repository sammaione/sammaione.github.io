// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Maione_CV_Sep2025.pdf";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-letters",
          title: 'letters',
          description: "A grassroots community that organizes a biannual self-titled zine featuring a collection of political essays, commentary, and creative works written by the public, for the public.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-cignal",
          title: 'Cignal',
          description: "An app that neatly compiles US legislation in one place and uses a (local) LLM to summarize each article.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-shared-neural-regions-for-physical-reasoning-and-working-memory",
          title: 'Shared Neural Regions for Physical Reasoning and Working Memory',
          description: "Prior literature identifies regions of the human frontal and parietal cortex that respond during tasks of physical reasoning, as well as other tasks demanding attentional control, including in individual participants. This leaves open the question whether the neural substrates for domain general attentional demand support physical reasoning, whether the neural substrates for physical reasoning support attentional control, or both. Here, we analyzed an open fMRI dataset in which 28 human adults (i) made physical judgements about dynamic videos of inanimate objects and a closely matched social condition featuring animate agents, and (ii) performed a relatively difficult vs easy spatial working memory task. Using a subject-specific functional region of interest (fROI) approach, we found an asymmetry between responses of fROIs maximally engaged by demanding spatial working memory, which responded equally to social and physical processing, and fROIs maximally engaged by physical processing, which responded more to difficult than easy spatial working memory. Furthermore, univariate activity in fROIs engaged during physical processing predicted individual subjects’ performance on the spatial working memory task. Together, these results suggest a relationship between the frontoparietal cortex engaged during physical reasoning and either visuospatial processing in particular, or attentionally demanding tasks in general.\n\nThis study was [pre-registered](https://osf.io/7mtk8/) and presented at the Computational Cognitive Neuroscience conference in 2024, complete with a [conference abstract](https://2024.ccneuro.org/pdf/529_Paper_authored_Authored_Frontoparietal-regions-engaged-in-physical-prediction.pdf) and [poster presentation](https://drive.google.com/file/d/1Vd9YlzkjnQFcXEGTARrBPJUWish5i7AB/view?usp=sharing).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-colorado-visual-snow-survey-2-0",
          title: 'Colorado Visual Snow Survey 2.0',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
