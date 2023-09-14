window.webviewerFunctions = {
    initWebViewer: function () {
        const viewerElement = document.getElementById('viewer');
        WebViewer({
            path: 'lib',
            initialDoc: '../files/demo.pdf',
            licenseKey: 'Zqphz5xvJX6E96AUasmi',
        }, viewerElement).then((instance) => {
            // now you can access APIs through the WebViewer instance
            const { Core, UI } = instance;

            // adding an event listener for when a document is loaded
            Core.documentViewer.addEventListener('documentLoaded', () => {
                console.log('document loaded');
            });

            // adding an event listener for when the page number has changed
            Core.documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
                console.log(`Page number is: ${pageNumber}`);

                var totalPage = Core.documentViewer.getPageCount();
                if (totalPage != pageNumber) {
                    var el = document.getElementById("go")
                    el.setAttribute("disabled", "");
                } else {
                    var el = document.getElementById("go")
                    el.removeAttribute("disabled");
                }
            });

            // adds a button to the header that on click sets the page to the next page
            UI.setHeaderItems(header => {
                header.push({
                    type: 'actionButton',
                    img: 'https://icons.getbootstrap.com/assets/icons/caret-right-fill.svg',
                    onClick: () => {
                        const currentPage = Core.documentViewer.getCurrentPage();
                        const totalPages = Core.documentViewer.getPageCount();
                        const atLastPage = currentPage === totalPages;

                        if (atLastPage) {
                            Core.documentViewer.setCurrentPage(1);
                        } else {
                            Core.documentViewer.setCurrentPage(currentPage + 1);
                        }
                    }
                });
            });
        })
    }
};
