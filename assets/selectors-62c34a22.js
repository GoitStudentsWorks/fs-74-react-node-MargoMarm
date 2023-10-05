import{n as a,m as o}from"./index-3c11434c.js";const t="/fs-74-react-node-MargoMarm/assets/home-page_desktop_1x-2dc737d6.jpg",s="/fs-74-react-node-MargoMarm/assets/home-page_desktop_2x-2c5d358c.jpg",r="/fs-74-react-node-MargoMarm/assets/home-page_desktop_3x-30837f7d.jpg",n="/fs-74-react-node-MargoMarm/assets/home-page_tablet_1x-3f850f85.jpg",p="/fs-74-react-node-MargoMarm/assets/home-page_tablet_2x-16fa8106.jpg",m="/fs-74-react-node-MargoMarm/assets/home-page_tablet_3x-96c27aa0.jpg",g="/fs-74-react-node-MargoMarm/assets/home-page_mobile_1x-516df911.jpg",d="/fs-74-react-node-MargoMarm/assets/home-page_mobile_2x-1e729053.jpg",x="/fs-74-react-node-MargoMarm/assets/home-page_mobile_3x-10fc07f4.jpg",e={imgDx1:t,imgDx2:s,imgDx3:r,imgTx1:n,imgTx2:p,imgTx3:m,imgMx1:g,imgMx2:d,imgMx3:x},l=a.ul`
  display: flex;
  gap: 20px;
`,u=a.div`
  position: relative;
  height: 685px;
  background-image: url(${e.imgMx1});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 298px 571px;
  padding: 0 20px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${e.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${e.imgMx3});
    }
  }

  ${o.tablet} {
    height: 832px;
    background-image: url(${e.imgTx1});
    background-size: 437px 893px;
    padding: 0 32px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${e.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${e.imgTx3});
      }
    }
  }
  ${o.desktop} {
    height: 0;
    background: none;
    padding: 0 0 0 96px;
  }
`,b=a.div`
  ${o.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${e.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${e.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${e.imgDx3});
      }
    }
  }
`,k=i=>i.statistics.allExercises,M=i=>i.statistics.usersBurnedCalories;export{l as L,b as W,M as a,u as b,k as g};
