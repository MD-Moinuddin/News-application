export interface TopStoryDto {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  item_type: string;
  copyright: string;
  multimedia: Multimedia[];
}

export interface Multimedia {
  url: string;
  caption: string;
  // copyright: string;
}
