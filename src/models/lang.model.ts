export type LangContextData = {
  lang: 'pt-br' | 'en';
  switchLang: (lang: LangContextData['lang']) => void;
  dataContent: {
    menu: {
      home: string;
      about: string;
      jobs: string;
    };
    home: {
      title: string;
      desc: string;
      btn: string;
    };
    about: {
      title: string;
      subtitle: string;
      desc: string;
      infos: {
        age: string;
        experience: string;
        desc: string;
      };
      skills: {
        title: string;
      };
      experiences: {
        title: string;
        list: {
          yearStart: string;
          yearEnd: string;
          position: string;
          company: string;
        }[];
      };
    };
    jobs: {
      title: string;
      subtitle: string;
      btn: string;
      list: {
        title: string;
        desc: string;
        skills: {
          title: string;
          list: string[];
        };
        link: string;
        img: string;
      }[];
    };
  } | null;
};
