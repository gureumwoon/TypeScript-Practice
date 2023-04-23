import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement>{
  constructor(title: string, url: string) {
    super(`    <section class="video">
                  <div class="video-holder">
                    <iframe class="video-thumbnail"></iframe>
                  </div>
                  <h2 class="video-title"></h2>
               </section>`);

    const videoElement = this.element.querySelector('.video-thumbnail')! as HTMLIFrameElement;
    // videoElement.src = url; // url -> videoId -> embed
    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector('.video-title')! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  // https://www.youtube.com/watch?v=m34DPnRUfMU
  // https://www.youtube.com/watch?v=m34DPnRUfMU&pp=ygUbbXJzIGdyZWVuIGFwcGxlIGFvIHRvIG5hdHN1
  // https://youtu.be/m34DPnRUfMU
  // output
  // https://www.youtube.com/embed/m34DPnRUfMU
  // 정규표현식 Regex

  private convertToEmbeddedURL(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);

    const videoId = match && match[7]?.length == 11 ? match[7] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url;
  }
}