# ImgPen image editor SDK

> Image editor SDK for your websites and web applications. Both **client** and **server** side modules.

Easy to install image editor which covers all standard required features like cropping, resizing, filters and other manipulations. You can adopt photos and images to your website content before publishing them or edit existing pictures.

It can be perfectly integrated with common CMSs (WordPress, Drupal, Joomla, etc), with popular client frameworks (React, Angular, Vue, etc.), server frameworks (Laravel, Symphony, YII, RoR, Django, etc.) and in any other code using API.

The great advantage of ImgPen are tools for full stack application integration.
ImgPen contains both client script (JS/TypeScript) and server side [file uploader](https://npmjs.com/package/@edsdk/file-uploader-server) in **PHP**, **Node** and **Java** for saving images on your server. It also has microservice feature for those who would like to use uploader separately or uses different language on server side.
Deploy and run your own demo in 1 min using [ImgPen example](https://github.com/edsdk/imgpen-example) repository.


## Install

With [npm](https://npmjs.com/) installed, run

```
$ npm install @edsdk/imgpen
```


## Usage

```js
var ImgPen = require('@edsdk/imgpen');

var img = document.querySelector("#img");
ImgPen.editImage({
    urlImage: img.src,
    urlUploader: 'http://mywebsite/uploader',
    urlFiles: 'http://mywebsite/files/',
    onSave: function(url) {
        img.src = url;
    }
})
```

This code will call ImgPen image editor on specified image and upload result image file when (and if) user clicks save button. `onSave` callback will update your image with new picture.

You need to have [file uploader](https://npmjs.com/package/@edsdk/file-uploader-server) installed. When using ImgPen by free license, it comes as Express service module handling specified URL and uploading files in defined directory. For commercial license users PHP and Java backends are provided as well.


## API

```js
function editImage({
    urlImage: string,
    urlUploader: string,
    urlFiles: string,
    dirDestination?: string,
    onSave: function(url: string)
});
```

- `urlImage` - URL of image you want to edit (be sure CORS is enabled for external resources)
- `urlUploader` - URL where your [file uploader](https://npmjs.com/package/@edsdk/file-uploader-server) is installed
- `urlFiles` - URL prefix for generating URL to the new image
- `dirDestination` - optional subdirectory where to place a new saved image, from the root of server directory of uploader
- `onSave` - callback with generated URL of saved image as parameter

See [ImgPen example](https://github.com/edsdk/imgpen-example) to see real code with comments.


#### Preloading

To avoid network delays you can preload ImgPen at any moment (e. g. you page is loaded):

```js
function preload(callback?: function());
```

After this call all next `editImage` calls will be faster. If you do not use `preload`, calling `editImage` first time can be slower.
You can also pass `callback` function if you want to execute some code right after ImgPen libraries were preloaded.


## Acknowledgments

ImgPen was inspired by Aviary (dead) and Adobe Creative SDK for Web (service was closed).
So ImgPen is good migration alternative for Adobe Creative SDK for Web users.


## License

Double licensing:

1. Trial EdSDK license
    - All features
    - NOT for commercial usage (except trial purposes on dev server)
    - [Server side](https://npmjs.com/package/@edsdk/file-uploader-server) in TypeScript/JavaScript only.

2. Commercial EdSDK license
    - All features
    - Commercial usage is allowed
    - No "powered by" link is required
    - Commercial license for File Uploader for free
    - File Uploader backends for Node (JavaScript, TypeScript), Java, PHP, ASP.NET
    - OEM usage in applications is an option
    - [Purchase a license](https://imgpen.com) in order to use it