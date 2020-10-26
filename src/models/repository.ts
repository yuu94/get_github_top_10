import { GithubRepositoryItem } from './github-repo-response';

export class Repository {
  rank: number;
  name: string;
  language: string;
  star: number;
  url: string;
  cloneUrl: string;

  constructor(rank: number, item: GithubRepositoryItem) {
    this.rank = rank;
    this.name = item.full_name;
    this.language = item.language ? item.language : '--';
    this.star = item.stargazers_count;
    this.url = item.html_url;
    this.cloneUrl = item.ssh_url;
  }
}