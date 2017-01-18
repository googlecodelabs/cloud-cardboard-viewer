/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Video {
  id: {
    videoId: string
  }
  snippet: {
    description: string
    publishedAt: string|Date
    title: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
  constructor (props) {
    for (var key in props) {
      this[key] = props[key];
    }
    this.snippet.publishedAt = new Date(<string>this.snippet.publishedAt);
  }
}

/**
 * Component for displaying a single search result.
 */
@Component({
  moduleId: module.id,
  selector: 'video-card',
  styleUrls: ['src/app/video-card.css'],
  template: `
  <div class="mui-row video-card">
    <div class="mui-col-md-6">
      <div class="mui--text-headline">{{ video.snippet.title }}</div>
      <div class="mui--text-dark-secondary">
        Published {{ video.snippet.publishedAt | date }}
      </div>
      {{ video.snippet.description }}
    </div>
    <div class="mui-col-md-6">
      <div *ngIf="!show" (click)="show = true">
        <img [src]="video.snippet.thumbnails.high.url" height="150" />
      </div>
      <div *ngIf="show">
        <iframe width="420" height="315" [id]="video.id.videoId"
          [src]="updateVideoUrl(video)"
          allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen">
        </iframe>
      </div>
    </div>
  </div>
  `
})
export class VideoCardComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  @Input() video: Video
  show: boolean = false
  videoUrl: SafeResourceUrl
  updateVideoUrl(video: Video) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    const dangerousVideoUrl = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
}
