"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width - 1.875rem
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            maxWidth: "1200px", // 75rem
            fields: "15px" // side fields - 0.9375rem
        },
        breakPoints: {
            xs: {
                width: "320px" // 20rem
            },
            sm: {
                width: "576px" // 36rem
            },
            md: {
                width: "768px" // 48rem
            },
            lg: {
                width: "992px" // 62rem
            },
            xl: {
                width: "1200px" // 75rem
            }
        }
    });
    cb();
});
