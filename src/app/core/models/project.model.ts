export class Project {
    id: number;
    title: string;
    sections: any[];
    year: Date | number;
    tags: Array<string>;
    roles: Array<string>;
    paragraphs: Array<string>;
    repoLink: string;
    thumbnail: string;
}