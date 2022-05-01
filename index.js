
import fetch from 'node-fetch';
import {JSDOM} from 'jsdom';

export async function getVideo(id)
{
	const response = await fetch('https://mbasic.facebook.com/watch/?v=' + id);
	const html = await response.text();

	const dom = new JSDOM(html);

	const videoAnchor = dom.window.document.body.querySelector('a[href^="/video_redirect"]');
	const videoUrl = new URL(videoAnchor.getAttribute('href'));
	return videoUrl
}

const url = await getVideo('2036620686518041');

console.log(url);