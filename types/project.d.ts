export type Project = {
  title: string;
  badges?: Badge[];
  skills: Skills[];
  link?: string;
  iframeSrc?: string;
  imgSrc?: string;
  category: Category;
  srcType: SrcType;
};

type Badge = {
  label: string;
  color: string;
};
type SrcType = 'iframeSrc' | 'imgSrc';
type Category = 'Web' | 'Mobile' | 'Desktop';
type Skills =
  | 'NestJs'
  | 'Typescript'
  | 'React'
  | 'MongoDb'
  | 'MySql'
  | 'Firebase'
  | 'RN'
  | 'Figma'
  | 'NextJs'
  | 'Electron'
  | 'ExpressJs'
  | 'NodeJs';
