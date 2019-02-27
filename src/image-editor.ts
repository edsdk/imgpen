export function editImage(
    conf: {
        urlImage: string,
        urlUploader: string,
        urlFiles: string,
        dirDestination?: string,
        onSave: (url: string) => void
    }
) {
    preload(() => {
        (window as any).ImgPen.editImage(
            conf.urlImage,
            conf.urlUploader,
            conf.urlFiles,
            conf.dirDestination,
            conf.onSave
        );
    });
}

export function preload(onLoaded?: () => void) {
    includeJS('//cdn.imgpen.com/imgpen.js', () => {
        (window as any).ImgPen.load(() => {
            if (onLoaded)
                onLoaded();
        });
    });
}

function includeJS(url: string, onLoaded?: () => void) {
    var scripts = document.getElementsByTagName("script");
    var alreadyExists = false;
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src");
        if (src != null && src.indexOf(url) !== -1)
            alreadyExists = true;
    }
    if (!alreadyExists) {
        var script = document.createElement("script") as any;
        script.type = "text/javascript";
        if (onLoaded) {
            if (script.readyState) {  // IE
                script.onreadystatechange = function () {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        onLoaded();
                    }
                };
            } else {  // Others browsers
                script.onload = function () {
                    onLoaded();
                };
            }
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        if (onLoaded)
            onLoaded();
    }
}