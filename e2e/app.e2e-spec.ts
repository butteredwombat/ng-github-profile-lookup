import { NgGithubProfileLookupPage } from './app.po';

describe('ng-github-profile-lookup App', () => {
  let page: NgGithubProfileLookupPage;

  beforeEach(() => {
    page = new NgGithubProfileLookupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
