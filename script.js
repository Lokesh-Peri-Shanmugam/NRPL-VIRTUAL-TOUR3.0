TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "cardboardMenu": {
   "opacity": 0.4,
   "class": "Menu",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_25E23B30_30E3_07FC_41AF_13695C539012",
   "fontFamily": "Arial",
   "children": [
    {
     "label": "HOME",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "PHYTOCHEMISTRY",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "5",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "CENTRAL INSTRUMENTATION FACILITY",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "8",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "9",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "10",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "11",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "12",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "13",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "rollOverOpacity": 0.8,
   "fontColor": "#FFFFFF"
  },
  "frames": [
   {
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "hfovMax": 120,
  "vfov": 180,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "label": "HOME",
  "hfovMin": 120
 },
 {
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "partial": false,
  "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'rollOverBackgroundOpacity':1,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':1,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": -170.64,
        "hfov": 10.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 192,
           "width": 236,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -41.57
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2595973C_2AFA_AB00_415B_ADC56B4BBAF6",
      "useHandCursor": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3DD3C54D_30A5_03A7_41AD_36313EC411A2, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A, '95%', '95%', true, true); this.PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A.set('selectedIndex', 0); ; this.viewer_uid3E032294_30A5_06A4_413E_F0731A1AD780VideoPlayer.play();  }",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": 24.44,
        "hfov": 8.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 144,
           "width": 151,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.14
       }
      ]
     },
     {
      "rotationZ": 0,
      "popupMaxWidth": "45%",
      "yaw": -170.64,
      "hideDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 640,
         "width": 1024,
         "class": "ImageResourceLevel",
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "popupMaxHeight": "45%",
      "rotationX": 0,
      "hfov": 10.49,
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "yaw": 24.44,
      "hideDuration": 500,
      "video": {
       "height": 1080,
       "width": 1440,
       "class": "VideoResource",
       "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
      },
      "showEasing": "cubic_in",
      "autoplay": true,
      "id": "popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
      "loop": false,
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 8.91,
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationY": 0,
      "pitch": -6.14
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_252CBE6C_30E3_1E64_41B9_21E5B64375D1); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": 128.9,
        "hfov": 9.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 178,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.55
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "hfovMax": 120,
  "vfov": 180,
  "hfov": 360,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "backwardYaw": -45.16,
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_255DBC2A_30E3_01EC_41B5_152AD3B52C5A); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": -45.16,
           "hfov": 14.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 88,
              "width": 261,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -18.35
          }
         ]
        },
        {
         "inertia": false,
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "width": 850,
            "class": "ImageResourceLevel",
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "hfov": 45,
         "class": "TripodCapPanoramaOverlay",
         "angle": 0
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "hfovMax": 120,
     "vfov": 180,
     "hfov": 360,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "backwardYaw": 128.9,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "distance": 1,
       "yaw": -45.16
      }
     ],
     "pitch": 0,
     "label": "5",
     "hfovMin": 120
    },
    "distance": 1,
    "yaw": 128.9
   }
  ],
  "pitch": 0,
  "label": "PHYTOCHEMISTRY",
  "hfovMin": 120
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.15,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -43.37,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "targetPitch": 7.45,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.48,
   "pitch": -1.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -3.21,
     "pitchSpeed": 22.4,
     "easing": "cubic_in_out",
     "targetYaw": 162.53,
     "yawSpeed": 44,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -1.64,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -137.45,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, null, null, false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, null, null, false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, null, null, false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, null, null, false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "partial": false,
  "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_26D3FECA_30E3_1EAC_4181_077B2B2FA98E); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": 12.85,
        "hfov": 11.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "width": 192,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.56
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": 12.33,
        "hfov": 5.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 30,
           "width": 89,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.88
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3F60ADD7_2B29_F3FA_41C1_3A789B8B4D39",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D21C56D_30A5_0264_41B3_EEFF6FEE90FB, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F, this.PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A, '95%', '95%', true, true); this.PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A.set('selectedIndex', 0); ; this.viewer_uid3E0F52A4_30A5_06E4_41C2_CFF8DF788620VideoPlayer.play();  }",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "yaw": 39.7,
        "hfov": 7.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 133,
           "class": "ImageResourceLevel",
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.62
       }
      ]
     },
     {
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "yaw": 39.7,
      "hideDuration": 500,
      "video": {
       "height": 1080,
       "width": 1440,
       "class": "VideoResource",
       "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
      },
      "showEasing": "cubic_in",
      "autoplay": true,
      "id": "popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
      "loop": false,
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 7.83,
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationY": 0,
      "pitch": -8.62
     },
     {
      "inertia": false,
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "hfovMax": 120,
  "vfov": 180,
  "hfov": 360,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "backwardYaw": -90.53,
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_265BD022_30E3_019C_41B5_3DD81971C329); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": -90.53,
           "hfov": 10.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "width": 195,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -20.53
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D3E156D_30A5_0264_41C2_31EF42C38102, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555, '95%', '95%', true, true); this.PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555.set('selectedIndex', 0); ; this.viewer_uid3E0CB2A4_30A5_06E4_41C8_49DE847D1A72VideoPlayer.play();  }",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": -145.01,
           "hfov": 9.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 164,
              "width": 174,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -24.53
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_26B87FC4_30E3_1EA4_41B3_F09EDFAFFA80); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": 86.03,
           "hfov": 9.86,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 50,
              "width": 170,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -12.6
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_323124BA_2B79_D1AA_414C_5D3AB97511E4",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31509B93_2B78_507A_41BE_6FF586B6E809, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D3F556D_30A5_0264_41BD_6B110658CD1E, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5712E2_30A5_069C_41C7_BC9019283048, '95%', '95%', true, true); this.PlayList_3E5712E2_30A5_069C_41C7_BC9019283048.set('selectedIndex', 0); ; this.viewer_uid3E0DF2B3_30A5_06FC_41B5_FEDB7B661F5EVideoPlayer.play();  }",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": 128.52,
           "hfov": 6.84,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 119,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_3_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.03
          }
         ]
        },
        {
         "rotationZ": 0,
         "popupMaxWidth": "95%",
         "yaw": 128.52,
         "hideDuration": 500,
         "video": {
          "width": 1920,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "height": 1080,
          "class": "VideoResource"
         },
         "showEasing": "cubic_in",
         "autoplay": true,
         "id": "popup_31509B93_2B78_507A_41BE_6FF586B6E809",
         "loop": false,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hfov": 6.84,
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "pitch": -14.03
        },
        {
         "rotationZ": 0,
         "popupMaxWidth": "95%",
         "yaw": -145.01,
         "hideDuration": 500,
         "video": {
          "width": 1920,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "height": 1080,
          "class": "VideoResource"
         },
         "showEasing": "cubic_in",
         "autoplay": true,
         "id": "popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
         "loop": false,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hfov": 9.42,
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "pitch": -24.53
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0273C9CA_2B58_73EA_41AA_5B5B9D3B79B5",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_03DF8247_2B58_D0DA_41C0_97250405E525, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D3C556D_30A5_0264_41B4_972F789BDA91, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E57A2E2_30A5_069C_41A4_840987970388, '95%', '95%', true, true); this.PlayList_3E57A2E2_30A5_069C_41A4_840987970388.set('selectedIndex', 0); ; this.viewer_uid3E0A42B3_30A5_06FC_41BC_01ADE627546FVideoPlayer.play();  }",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": 33.51,
           "hfov": 7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 119,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_4_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -6.36
          }
         ]
        },
        {
         "rotationZ": 0,
         "popupMaxWidth": "95%",
         "yaw": 33.51,
         "hideDuration": 500,
         "video": {
          "width": 1920,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "height": 1080,
          "class": "VideoResource"
         },
         "showEasing": "cubic_in",
         "autoplay": true,
         "id": "popup_03DF8247_2B58_D0DA_41C0_97250405E525",
         "loop": false,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hfov": 7,
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "pitch": -6.36
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_01D596A0_2B58_7056_41B8_22A4BCD67EE3",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D3A856D_30A5_0264_41B4_C6872496D7B8, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8, '95%', '95%', true, true); this.PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8.set('selectedIndex', 0); ; this.viewer_uid3E0B72B3_30A5_06FC_41A7_7E13283BF873VideoPlayer.play();  }",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "yaw": 56.43,
           "hfov": 6.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 98,
              "width": 107,
              "class": "ImageResourceLevel",
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_5_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -4.79
          }
         ]
        },
        {
         "rotationZ": 0,
         "popupMaxWidth": "95%",
         "yaw": 56.43,
         "hideDuration": 500,
         "video": {
          "width": 1920,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "height": 1080,
          "class": "VideoResource"
         },
         "showEasing": "cubic_in",
         "autoplay": true,
         "id": "popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
         "loop": false,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hfov": 6.33,
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "pitch": -4.79
        },
        {
         "inertia": false,
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "width": 850,
            "class": "ImageResourceLevel",
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "hfov": 45,
         "class": "TripodCapPanoramaOverlay",
         "angle": 0
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "hfovMax": 120,
     "vfov": 180,
     "hfov": 360,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "backwardYaw": -89.79,
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_3270CB21_2B78_7059_41C0_F40E41FBCA4E",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32F9A509_2B79_D056_41C3_C9791435C04A, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3DD0D54D_30A5_03A7_41C3_EC34A41D52E3, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427, this.PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81, '95%', '95%', true, true); this.PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81.set('selectedIndex', 0); ; this.viewer_uid3E0802B3_30A5_06FC_41C0_CCD2A103D94BVideoPlayer.play();  }",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "yaw": 145.17,
              "hfov": 10.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 188,
                 "width": 192,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -24.62
             }
            ]
           },
           {
            "rotationZ": 0,
            "popupMaxWidth": "95%",
            "yaw": 145.17,
            "hideDuration": 500,
            "video": {
             "height": 1080,
             "width": 1440,
             "class": "VideoResource",
             "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
            },
            "showEasing": "cubic_in",
            "autoplay": true,
            "id": "popup_32F9A509_2B79_D056_41C3_C9791435C04A",
            "loop": false,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hfov": 10.37,
            "showDuration": 500,
            "hideEasing": "cubic_out",
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "pitch": -24.62
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_25736CE6_30E3_0264_41C1_E8E25B749B37); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "yaw": 86.11,
              "hfov": 10.82,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 188,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -13.9
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31280070_2B78_50B6_419B_080177D85868",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D20155D_30A5_03A4_41BF_1378F3FB8BAE, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_3E5552F2_30A5_067C_417F_7429517B36F8, '95%', '95%', true, true); this.PlayList_3E5552F2_30A5_067C_417F_7429517B36F8.set('selectedIndex', 0); ; this.viewer_uid3E0912B3_30A5_06FC_41B5_3C8DB64A39DDVideoPlayer.play();  }",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "yaw": 100.98,
              "hfov": 4.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 88,
                 "width": 80,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_2_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.39
             }
            ]
           },
           {
            "rotationZ": 0,
            "popupMaxWidth": "95%",
            "yaw": 100.98,
            "hideDuration": 500,
            "video": {
             "height": 1080,
             "width": 1440,
             "class": "VideoResource",
             "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
            },
            "showEasing": "cubic_in",
            "autoplay": true,
            "id": "popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
            "loop": false,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hfov": 4.77,
            "showDuration": 500,
            "hideEasing": "cubic_out",
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "pitch": -4.39
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_310CE2F4_2B69_B1BE_41C5_919AF0474839",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D20D55D_30A5_03A4_41C3_17A38E7D48C6, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F, '95%', '95%', true, true); this.PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F.set('selectedIndex', 0); ; this.viewer_uid3E7672B3_30A5_06FC_41BB_B7344CEA142CVideoPlayer.play();  }",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "yaw": 47.89,
              "hfov": 6.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 119,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_3_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -8.01
             }
            ]
           },
           {
            "rotationZ": 0,
            "popupMaxWidth": "95%",
            "yaw": 47.89,
            "hideDuration": 500,
            "video": {
             "width": 1920,
             "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
             "height": 1080,
             "class": "VideoResource"
            },
            "showEasing": "cubic_in",
            "autoplay": true,
            "id": "popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
            "loop": false,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hfov": 6.98,
            "showDuration": 500,
            "hideEasing": "cubic_out",
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "pitch": -8.01
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_2549BC98_30E3_02AC_41A5_CEF637576266); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "yaw": -89.79,
              "hfov": 13.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 88,
                 "width": 261,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -27.59
             }
            ]
           },
           {
            "inertia": false,
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "rotate": false,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 850,
               "width": 850,
               "class": "ImageResourceLevel",
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "hfov": 45,
            "class": "TripodCapPanoramaOverlay",
            "angle": 0
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "hfovMax": 120,
        "vfov": 180,
        "hfov": 360,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "backwardYaw": 86.03,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "distance": 1,
          "yaw": -89.79
         },
         {
          "backwardYaw": 158.9,
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_35D178C7_2B6B_B1DA_419D_6A9CE0D0D320",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3DD1854D_30A5_03A7_41AA_49FC80695F3D, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466, '95%', '95%', true, true); this.PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466.set('selectedIndex', 0); ; this.viewer_uid3E7742B3_30A5_06FC_41BA_B7C664EC29F9VideoPlayer.play();  }",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "yaw": 146.17,
                 "hfov": 6.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 114,
                    "width": 114,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -0.56
                }
               ]
              },
              {
               "rotationZ": 0,
               "popupMaxWidth": "95%",
               "yaw": 146.17,
               "hideDuration": 500,
               "video": {
                "height": 1080,
                "width": 1440,
                "class": "VideoResource",
                "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
               },
               "showEasing": "cubic_in",
               "autoplay": true,
               "id": "popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
               "loop": false,
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hfov": 6.78,
               "showDuration": 500,
               "hideEasing": "cubic_out",
               "class": "PopupPanoramaOverlay",
               "rotationY": 0,
               "pitch": -0.56
              },
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_261F90AE_30E3_02E5_41C6_12FC2C400245); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "yaw": 158.9,
                 "hfov": 11.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 63,
                    "width": 208,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -23.27
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_267C7070_30E3_027C_41A6_AF87D875E236); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "yaw": -140.96,
                 "hfov": 13.63,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 88,
                    "width": 261,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -28.46
                }
               ]
              },
              {
               "inertia": false,
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "class": "ImageResourceLevel",
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "hfov": 45,
               "class": "TripodCapPanoramaOverlay",
               "angle": 0
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "hfovMax": 120,
           "vfov": 180,
           "hfov": 360,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "backwardYaw": 99.8,
             "class": "AdjacentPanorama",
             "panorama": {
              "partial": false,
              "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_044EDAC0_2B3B_F1D6_41C0_39F09160F6D7",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2EB54D_30A5_03A7_41AB_CC280C2D610E, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB, '95%', '95%', true, true); this.PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB.set('selectedIndex', 0); ; this.viewer_uid3E7572C3_30A5_069C_41C4_FA2398831939VideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -136.73,
                    "hfov": 7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -6.62
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": -136.73,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 7,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -6.62
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1BBC0855_2B39_F0FE_41C1_4D698D0C4AA2",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3DD1354D_30A5_03A7_41A4_7C5A72D16E97, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B, '95%', '95%', true, true); this.PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B.set('selectedIndex', 0); ; this.viewer_uid3E75C2C3_30A5_069C_41C3_CDF5C8ED852EVideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 164,
                    "hfov": 6.97,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_1_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -8.45
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": 164,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 6.97,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -8.45
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1B009202_2B38_F05A_41A0_FCD4FB26754D",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2E154D_30A5_03A7_41C5_5F526B4EFBD7, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508, '95%', '95%', true, true); this.PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508.set('selectedIndex', 0); ; this.viewer_uid3E7222C3_30A5_069C_4193_C876A6C81C22VideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 124.69,
                    "hfov": 7.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_2_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": 124.69,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 7.01,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -5.48
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1B7F84CD_2B3F_F1E9_41BD_0AE3BCF1AF31",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2FC55D_30A5_03A4_416B_4F61E8CD6665, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0, '95%', '95%', true, true); this.PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0.set('selectedIndex', 0); ; this.viewer_uid3E7372C3_30A5_069C_41B6_6006EAFD786BVideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -61.5,
                    "hfov": 6.92,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_3_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -10.71
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": -61.5,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 6.92,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -10.71
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1B72BA2C_2B38_B0AE_4174_164ADBFB86CA",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2CD55D_30A5_03A4_41A3_D92A6685EF5B, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E, '95%', '95%', true, true); this.PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E.set('selectedIndex', 0); ; this.viewer_uid3E7242C3_30A5_069C_41C2_F8644E9034ECVideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -76.32,
                    "hfov": 4.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 77,
                       "width": 77,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -8.8
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": -76.32,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 4.55,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -8.8
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1A374A24_2B38_505E_41C5_02D82107BC2E",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2D855D_30A5_03A4_41B9_67A4BCF81F48, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB, '95%', '95%', true, true); this.PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB.set('selectedIndex', 0); ; this.viewer_uid3E72A2C3_30A5_069C_41B5_D55782F064DCVideoPlayer.play();  }",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -112.85,
                    "hfov": 4.06,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 63,
                       "width": 68,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_5_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_26971F66_30E3_1E64_41B5_FE143E67744A); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 99.8,
                    "hfov": 13.67,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 88,
                       "width": 261,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -28.11
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_26F6BF18_30E3_1FAC_41C3_0D6278149A82); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -95.11,
                    "hfov": 10.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 54,
                       "width": 205,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -28.68
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "yaw": -112.85,
                  "hideDuration": 500,
                  "video": {
                   "width": 1920,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "height": 1080,
                   "class": "VideoResource"
                  },
                  "showEasing": "cubic_in",
                  "autoplay": true,
                  "id": "popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
                  "loop": false,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "hfov": 4.06,
                  "showDuration": 500,
                  "hideEasing": "cubic_out",
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "pitch": -5.48
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -92.84,
                    "hfov": 5.04,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 29,
                       "width": 88,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -14.95
                   }
                  ]
                 },
                 {
                  "inertia": false,
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "hfov": 45,
                  "class": "TripodCapPanoramaOverlay",
                  "angle": 0
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "hfovMax": 120,
              "vfov": 180,
              "hfov": 360,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "backwardYaw": 85.77,
                "class": "AdjacentPanorama",
                "panorama": {
                 "partial": false,
                 "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2A255D_30A5_03A4_41B3_A20DF306542E, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0, '95%', '95%', true, true); this.PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0.set('selectedIndex', 0); ; this.viewer_uid3E7132C3_30A5_069C_417B_538FCB503842VideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -37.79,
                       "hfov": 6.37,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -25.27
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D2B255D_30A5_03A4_41C7_425E7AA8CEB2, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF, '95%', '95%', true, true); this.PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF.set('selectedIndex', 0); ; this.viewer_uid3E71A2C3_30A5_069C_4193_269DC4BEDF58VideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -84.17,
                       "hfov": 4.36,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "width": 74,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.37
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1A1525A4_2B5B_B05E_4196_CE94695CD2F3",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_195005A5_2B58_D05E_41AE_B430F46606C7, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D28655D_30A5_03A4_41B5_8EA2274B56D6, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C, this.PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A, '95%', '95%', true, true); this.PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A.set('selectedIndex', 0); ; this.viewer_uid3E7E12C3_30A5_069C_41AE_BE2728027C2DVideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -143.61,
                       "hfov": 6.9,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_2_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -11.5
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1844E73E_2B58_F0AA_41C4_385650C01BC3",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D29755D_30A5_03A4_41B8_0771C8192A62, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691, '95%', '95%', true, true); this.PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691.set('selectedIndex', 0); ; this.viewer_uid3E7E82C3_30A5_069C_41A8_665381A263EEVideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -177,
                       "hfov": 6.98,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_3_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -7.75
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_19CFD7F5_2B58_7FBE_419B_76A922911F64",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_184933F0_2B58_57B6_4188_25FA6469F73E, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D26055D_30A5_03A4_41A6_4B79D9469FFD, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05, '95%', '95%', true, true); this.PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05.set('selectedIndex', 0); ; this.viewer_uid3E7FE2C3_30A5_069C_41B5_6B74D595E9CEVideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 119.8,
                       "hfov": 7.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_4_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -4.44
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1FAF4C3A_2B58_50AA_41C4_3E08643314EE",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D27455D_30A5_03A4_41AE_92A20F9C03C3, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799, '95%', '95%', true, true); this.PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799.set('selectedIndex', 0); ; this.viewer_uid3E7C62D3_30A5_06BC_41C7_B7B341B64442VideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 54.34,
                       "hfov": 6.97,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_5_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -8.27
                      }
                     ]
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": -143.61,
                     "hideDuration": 500,
                     "video": {
                      "height": 1080,
                      "width": 1440,
                      "class": "VideoResource",
                      "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_195005A5_2B58_D05E_41AE_B430F46606C7",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 6.9,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -11.5
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": -177,
                     "hideDuration": 500,
                     "video": {
                      "width": 1920,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "height": 1080,
                      "class": "VideoResource"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 6.98,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -7.75
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": 119.8,
                     "hideDuration": 500,
                     "video": {
                      "width": 1920,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "height": 1080,
                      "class": "VideoResource"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_184933F0_2B58_57B6_4188_25FA6469F73E",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 7.02,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -4.44
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": 54.34,
                     "hideDuration": 500,
                     "video": {
                      "width": 1920,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "height": 1080,
                      "class": "VideoResource"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 6.97,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -8.27
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": -37.79,
                     "hideDuration": 500,
                     "video": {
                      "width": 1920,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "height": 1080,
                      "class": "VideoResource"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 6.37,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -25.27
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1F6BFB9E_2B58_706A_41A0_D6359D2FB465",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D25A55D_30A5_03A4_41BE_32D9A22852A0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204, '95%', '95%', true, true); this.PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204.set('selectedIndex', 0); ; this.viewer_uid3E7D42D3_30A5_06BC_41AB_52EF17C442F9VideoPlayer.play();  }",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -121.3,
                       "hfov": 4.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 73,
                          "width": 77,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_6_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -5.7
                      }
                     ]
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": -121.3,
                     "hideDuration": 500,
                     "video": {
                      "height": 1080,
                      "width": 1440,
                      "class": "VideoResource",
                      "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 4.58,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -5.7
                    },
                    {
                     "rotationZ": 0,
                     "popupMaxWidth": "95%",
                     "yaw": -84.17,
                     "hideDuration": 500,
                     "video": {
                      "width": 1920,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "height": 1080,
                      "class": "VideoResource"
                     },
                     "showEasing": "cubic_in",
                     "autoplay": true,
                     "id": "popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
                     "loop": false,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hfov": 4.36,
                     "showDuration": 500,
                     "hideEasing": "cubic_out",
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "pitch": -10.37
                    },
                    {
                     "inertia": false,
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "hfov": 45,
                     "class": "TripodCapPanoramaOverlay",
                     "angle": 0
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_251BAD63_30E3_039C_41C4_2969189C8165); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 85.77,
                       "hfov": 13.35,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 66,
                          "width": 235,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -16.65
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_2502DDD0_30E3_02BC_41B9_C66B34C8736D); this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -104.48,
                       "hfov": 11.18,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 54,
                          "width": 204,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -22.58
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "hfovMax": 120,
                 "vfov": 180,
                 "hfov": 360,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -95.11,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "distance": 1,
                   "yaw": 85.77
                  },
                  {
                   "backwardYaw": 97.27,
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "cardboardMenu": "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "overlays": [
                       {
                        "inertia": false,
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "rotate": false,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "class": "ImageResourceLevel",
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "hfov": 45,
                        "class": "TripodCapPanoramaOverlay",
                        "angle": 0
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_694EB6C3_2B69_D1DA_41C5_644885469A76",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D24555D_30A5_03A4_41AA_DAA1891612FB, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64, '95%', '95%', true, true); this.PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64.set('selectedIndex', 0); ; this.viewer_uid3E7B52D3_30A5_06BC_41C1_41E3614D86A4VideoPlayer.play();  }",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -66.43,
                          "hfov": 5.25,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 88,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -13.29
                         }
                        ]
                       },
                       {
                        "rotationZ": 0,
                        "popupMaxWidth": "95%",
                        "yaw": -66.43,
                        "hideDuration": 500,
                        "video": {
                         "width": 1920,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "height": 1080,
                         "class": "VideoResource"
                        },
                        "showEasing": "cubic_in",
                        "autoplay": true,
                        "id": "popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
                        "loop": false,
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hfov": 5.25,
                        "showDuration": 500,
                        "hideEasing": "cubic_out",
                        "class": "PopupPanoramaOverlay",
                        "rotationY": 0,
                        "pitch": -13.29
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D22B55D_30A5_03A4_41A9_A18C9E541F35, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC, '95%', '95%', true, true); this.PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC.set('selectedIndex', 0); ; this.viewer_uid3E7BC2D3_30A5_06BC_415B_1E905EB85D2BVideoPlayer.play();  }",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 48.72,
                          "hfov": 6.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 129,
                             "width": 132,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -32.46
                         }
                        ]
                       },
                       {
                        "rotationZ": 0,
                        "popupMaxWidth": "95%",
                        "yaw": 48.72,
                        "hideDuration": 500,
                        "video": {
                         "width": 1920,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "height": 1080,
                         "class": "VideoResource"
                        },
                        "showEasing": "cubic_in",
                        "autoplay": true,
                        "id": "popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
                        "loop": false,
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hfov": 6.61,
                        "showDuration": 500,
                        "hideEasing": "cubic_out",
                        "class": "PopupPanoramaOverlay",
                        "rotationY": 0,
                        "pitch": -32.46
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_681A448E_2B79_D06A_41C3_848A63AB0DC7",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','paddingTop':5,'iconHeight':20,'paddingBottom':5,'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedIconColor':'#888888'}) } else { this.showPopupMedia(this.window_3D23F55D_30A5_03A4_41C7_54DA9DFCF978, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF, '95%', '95%', true, true); this.PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF.set('selectedIndex', 0); ; this.viewer_uid3E7802D3_30A5_06BC_419A_E2FDBC7D2CCDVideoPlayer.play();  }",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 163.82,
                          "hfov": 6.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "width": 119,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_2_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -10.8
                         }
                        ]
                       },
                       {
                        "rotationZ": 0,
                        "popupMaxWidth": "95%",
                        "yaw": 163.82,
                        "hideDuration": 500,
                        "video": {
                         "height": 1080,
                         "width": 1440,
                         "class": "VideoResource",
                         "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                        },
                        "showEasing": "cubic_in",
                        "autoplay": true,
                        "id": "popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
                        "loop": false,
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hfov": 6.92,
                        "showDuration": 500,
                        "hideEasing": "cubic_out",
                        "class": "PopupPanoramaOverlay",
                        "rotationY": 0,
                        "pitch": -10.8
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_263FF0ED_30E3_0264_41C3_0CAE52AEE3A4); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 97.27,
                          "hfov": 13.58,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 88,
                             "width": 261,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -28.81
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -129.67,
                          "hfov": 11.37,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 67,
                             "width": 210,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -24.1
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "hfovMax": 120,
                    "vfov": 180,
                    "hfov": 360,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -104.48,
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "distance": 1,
                      "yaw": 97.27
                     }
                    ],
                    "pitch": 0,
                    "label": "13",
                    "hfovMin": 120
                   },
                   "distance": 1,
                   "yaw": -104.48
                  }
                 ],
                 "pitch": 0,
                 "label": "12",
                 "hfovMin": 120
                },
                "distance": 1,
                "yaw": -95.11
               },
               {
                "backwardYaw": -140.96,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "distance": 1,
                "yaw": 99.8
               }
              ],
              "pitch": 0,
              "label": "11",
              "hfovMin": 120
             },
             "distance": 1,
             "yaw": -140.96
            },
            {
             "backwardYaw": 86.11,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "distance": 1,
             "yaw": 158.9
            }
           ],
           "pitch": 0,
           "label": "10",
           "hfovMin": 120
          },
          "distance": 1,
          "yaw": 86.11
         }
        ],
        "pitch": 0,
        "label": "9",
        "hfovMin": 120
       },
       "distance": 1,
       "yaw": 86.03
      },
      {
       "backwardYaw": 12.85,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "distance": 1,
       "yaw": -90.53
      }
     ],
     "pitch": 0,
     "label": "8",
     "hfovMin": 120
    },
    "distance": 1,
    "yaw": 12.85
   }
  ],
  "pitch": 0,
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "hfovMin": 120
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.23,
   "pitch": -10.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 0.04,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -3.44,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -29.16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.9,
   "pitch": -6.73
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -20.7,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -13.03,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.1,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -21.49,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -139.92,
   "pitch": -7.62
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -12.68,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -19.48,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.06,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.71,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -11.81,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -15.21,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -76.91,
   "pitch": 4.55
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 5.85,
     "pitchSpeed": 27.75,
     "easing": "cubic_in_out",
     "targetYaw": 137.15,
     "yawSpeed": 54.75,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": 1.23,
     "pitchSpeed": 28.82,
     "easing": "cubic_in_out",
     "targetYaw": -117.41,
     "yawSpeed": 56.9,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.76,
   "pitch": -2.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -5.19,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.76,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.37,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -25.93,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 122.77,
   "pitch": -3.35
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -8.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -8.67,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.54,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.63,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.07,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.46,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.48,
   "pitch": -14.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -30.29,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.1,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.42,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -21.75,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_262F710C_30E3_03A4_41AC_7F27342C391D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_262F010C_30E3_03A4_41B1_C334B66154EB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_262F910C_30E3_03A4_41C3_6D818A915A60, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_262FA10C_30E3_03A4_41C7_2410D25E2B44, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_262E610C_30E3_03A4_41C1_DE7FA92355E3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_262ED10C_30E3_03A4_41C5_128302358BD7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_262E810C_30E3_03A4_41C6_66FC5557A373, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_262D110C_30E3_03A4_41C6_1821F9D03E44, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_262D210C_30E3_03A4_41C5_A50362B8692D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_262D910C_30E3_03A4_4196_0FD81BFF3953, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_262DA10C_30E3_03A4_41B1_53AAB2CA7739, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)"
   },
   {
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_262CC10C_30E3_03A4_41C4_E00CC7821647, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_262C810C_30E3_03A4_41BB_8B4508CB01E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_262D311C_30E3_03A4_41BC_C4750566B72C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_262DF11C_30E3_03A4_41B8_FEEE0B731C6F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_262D911C_30E3_03A4_41B4_2A4994A0724F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_262C511C_30E3_03A4_41C0_589E32C695D0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_262C911C_30E3_03A4_41A8_AC6C91C6FCAB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_262C811C_30E3_03A4_41C0_92844D46636F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_262B611C_30E3_03A4_41B9_48D9E65576B2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_262B211C_30E3_03A4_41C6_AD1BB68F2801, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_262BF11C_30E3_03A4_41A4_F9FB700A09FC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_262BB11C_30E3_03A4_4172_9F5F29552E6F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_262A711C_30E3_03A4_41BE_ED90338400DE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_262A011C_30E3_03A4_41A9_83D418EA4236, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_262AE11C_30E3_03A4_41C6_3C36C43F26F6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_262AB11C_30E3_03A4_41BD_32A886718743, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_2629512B_30E3_03E3_4197_5A84AE677014, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_2629112B_30E3_03E3_41B6_6F4FA91D8117, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_2629C12B_30E3_03E3_41BA_9DB97B7C9E1C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_2629812B_30E3_03E3_4193_1C7D1A73151D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2628712B_30E3_03E3_41C4_2562CBA858EE, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_2628212B_30E3_03E3_41B5_EE79AF02E15B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_2628F12B_30E3_03E3_41C5_A0734675215E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_2628A12B_30E3_03E3_41AB_323B5A55BB98, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_3D6066F9_30A5_0E6C_41C0_D141456B1ADB, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false)"
   },
   {
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_2627212B_30E3_03E3_41C8_0CBB27A2D1F1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2627912B_30E3_03E3_41B2_D2594B4D34E1, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2627A12B_30E3_03E3_41C2_1CDB6239827B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2626612B_30E3_03E3_41AF_035A3FE73D95, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_2627312B_30E3_03E3_4195_50A77A508C6E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_2627C13B_30E3_03EC_41BB_8DB698E1B81C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222043DD_30DF_06A4_41BF_E943BC8065AF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2627813B_30E3_03EC_41A1_A9CF5C7FED2A, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2626613B_30E3_03EC_41C7_7177667CD1CA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2626313B_30E3_03EC_41C5_B80973C3FEF4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222043DD_30DF_06A4_41BF_E943BC8065AF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_2626B13B_30E3_03EC_41A4_13CA7D5758BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_2625713B_30E3_03EC_41C7_C526FC424C4A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222263DD_30DF_06A4_41BF_6C6BB4439738, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2625113B_30E3_03EC_41C3_5395AD3D36D9, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2625C13B_30E3_03EC_41A2_F7B5C2DE0D5B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2625913B_30E3_03EC_41AC_F3E1800B6BC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222263DD_30DF_06A4_41BF_6C6BB4439738, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_2624D13B_30E3_03EC_41A9_1BF18BA0E75A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222493DD_30DF_06A4_41B7_13370B74447E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2624813B_30E3_03EC_41C3_EEAEEFC20677, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')",
    "begin": "this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_222493DD_30DF_06A4_41B7_13370B74447E, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false)"
   },
   {
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2623013B_30E3_03EC_4176_A08A4CF98C74, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2623F13B_30E3_03EC_41BC_26759CC0AECB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2623813B_30E3_03EC_41C7_1368C336EC01, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2622214B_30E3_03AC_41BD_4BBFC90195BC, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2622F14B_30E3_03AC_41C6_71E8E02E412A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2622914B_30E3_03AC_41C7_764CBF67DBFC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_2621214B_30E3_03AC_41C1_D0D4B0BB62C5, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_2621E14B_30E3_03AC_41C2_C64A7299856F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_2621B14B_30E3_03AC_41B1_1B2115A7EBAC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE'); this.trigger('tourEnded')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
  "items": [
   {
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_2620C14B_30E3_03AC_4185_51178DA3F031, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_2620814B_30E3_03AC_41BA_73C1986B1E42, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_27DF514B_30E3_03AC_4165_8B25AEBF57A6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_27DF114B_30E3_03AC_41C0_F0207E5E6752, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_2620414B_30E3_03AC_41B5_B94BE9C44374, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_2620314B_30E3_03AC_41AE_643660505C1E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_2620914B_30E3_03AC_41C8_2580F2C53AB3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_27DF714B_30E3_03AC_41AD_C86BC640B98F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_27DF214B_30E3_03AC_41A1_68C3D183B31C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_27DFE14B_30E3_03AC_414D_9CCAC8163B49, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_27DFA14B_30E3_03AC_417B_A8501D9272C4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)"
   },
   {
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_27DEF15A_30E3_03AC_416B_024A3B56E400, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_27DE815A_30E3_03AC_41C3_5B6F1A4C1A72, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_27DD615A_30E3_03AC_41AB_571399D6DB19, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_27DD015A_30E3_03AC_41B7_AF587D8AA2C1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_27DDC15A_30E3_03AC_4197_FF0D209619F9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_27DC515A_30E3_03AC_41AE_4B7617A40722, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_27DCD15A_30E3_03AC_41AD_7E4319B4694C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_27DC915A_30E3_03AC_41C6_B05E413D5236, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_27DCA15A_30E3_03AC_41A0_6B0C1E41BD11, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_27DB615A_30E3_03AC_41C3_9E79BB56B7C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "03 Ramprasad",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
  },
  "thumbnailUrl": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D_t.jpg",
  "width": 1440,
  "id": "video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E032294_30A5_06A4_413E_F0731A1AD780VideoPlayer)",
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E032294_30A5_06A4_413E_F0731A1AD780VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25D48AC3_30E3_069C_41C4_5116049A2842",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E032294_30A5_06A4_413E_F0731A1AD780VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "05 Nikitha",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
  },
  "thumbnailUrl": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F_t.jpg",
  "width": 1440,
  "id": "video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0F52A4_30A5_06E4_41C2_CFF8DF788620VideoPlayer)",
    "media": "this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0F52A4_30A5_06E4_41C2_CFF8DF788620VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25D11AD2_30E3_06BD_41B7_441AC1A3868C",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0F52A4_30A5_06E4_41C2_CFF8DF788620VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A, 0, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "intro video",
  "video": {
   "width": 1920,
   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
   "height": 1080,
   "class": "VideoResource"
  },
  "thumbnailUrl": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D_t.jpg",
  "width": 1920,
  "id": "video_6841836A_29BB_D7E4_41C1_99E27908293D",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0CB2A4_30A5_06E4_41C8_49DE847D1A72VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0CB2A4_30A5_06E4_41C8_49DE847D1A72VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25D09AD2_30E3_06BD_41C4_47B27341FCA3",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0CB2A4_30A5_06E4_41C8_49DE847D1A72VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5712E2_30A5_069C_41C7_BC9019283048",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0DF2B3_30A5_06FC_41B5_FEDB7B661F5EVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0DF2B3_30A5_06FC_41B5_FEDB7B661F5EVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CFCAD2_30E3_06BD_41C2_4C40825DF78A",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0DF2B3_30A5_06FC_41B5_FEDB7B661F5EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5712E2_30A5_069C_41C7_BC9019283048, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5712E2_30A5_069C_41C7_BC9019283048, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E57A2E2_30A5_069C_41A4_840987970388",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0A42B3_30A5_06FC_41BC_01ADE627546FVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0A42B3_30A5_06FC_41BC_01ADE627546FVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CE6AD2_30E3_06BD_41AD_B2E51E5ED82A",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0A42B3_30A5_06FC_41BC_01ADE627546FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E57A2E2_30A5_069C_41A4_840987970388, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E57A2E2_30A5_069C_41A4_840987970388, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0B72B3_30A5_06FC_41A7_7E13283BF873VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0B72B3_30A5_06FC_41A7_7E13283BF873VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CEFAD2_30E3_06BD_419A_E1C53008646A",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0B72B3_30A5_06FC_41A7_7E13283BF873VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "06 Usha T",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
  },
  "thumbnailUrl": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427_t.jpg",
  "width": 1440,
  "id": "video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0802B3_30A5_06FC_41C0_CCD2A103D94BVideoPlayer)",
    "media": "this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0802B3_30A5_06FC_41C0_CCD2A103D94BVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CC4AD2_30E3_06BD_41A7_4C87ABFDA28F",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0802B3_30A5_06FC_41C0_CCD2A103D94BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81, 0, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "12 Angela Paulson",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
  },
  "thumbnailUrl": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE_t.jpg",
  "width": 1440,
  "id": "video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5552F2_30A5_067C_417F_7429517B36F8",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E0912B3_30A5_06FC_41B5_3C8DB64A39DDVideoPlayer)",
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E0912B3_30A5_06FC_41B5_3C8DB64A39DDVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CCBAE2_30E3_069C_41B4_07B33B613B4B",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E0912B3_30A5_06FC_41B5_3C8DB64A39DDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5552F2_30A5_067C_417F_7429517B36F8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5552F2_30A5_067C_417F_7429517B36F8, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7672B3_30A5_06FC_41BB_B7344CEA142CVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7672B3_30A5_06FC_41BB_B7344CEA142CVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CBFAE2_30E3_069C_41C5_310636DB474D",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7672B3_30A5_06FC_41BB_B7344CEA142CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7742B3_30A5_06FC_41BA_B7C664EC29F9VideoPlayer)",
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7742B3_30A5_06FC_41BA_B7C664EC29F9VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25CABAE2_30E3_069C_41A6_6488E99C0EB1",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7742B3_30A5_06FC_41BA_B7C664EC29F9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7572C3_30A5_069C_41C4_FA2398831939VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7572C3_30A5_069C_41C4_FA2398831939VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C8AAE2_30E3_069C_41BA_00F3854CFB6B",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7572C3_30A5_069C_41C4_FA2398831939VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E75C2C3_30A5_069C_41C3_CDF5C8ED852EVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E75C2C3_30A5_069C_41C3_CDF5C8ED852EVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C7CAE2_30E3_069C_41A5_E7682D65B29B",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E75C2C3_30A5_069C_41C3_CDF5C8ED852EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7222C3_30A5_069C_4193_C876A6C81C22VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7222C3_30A5_069C_4193_C876A6C81C22VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C67AE2_30E3_069C_41B5_03918757CB74",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7222C3_30A5_069C_4193_C876A6C81C22VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7372C3_30A5_069C_41B6_6006EAFD786BVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7372C3_30A5_069C_41B6_6006EAFD786BVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C6BAE2_30E3_069C_41C6_AC9615E11FEE",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7372C3_30A5_069C_41B6_6006EAFD786BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7242C3_30A5_069C_41C2_F8644E9034ECVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7242C3_30A5_069C_41C2_F8644E9034ECVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C5DAE2_30E3_069C_4189_681981CFA76F",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7242C3_30A5_069C_41C2_F8644E9034ECVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E72A2C3_30A5_069C_41B5_D55782F064DCVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E72A2C3_30A5_069C_41B5_D55782F064DCVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C40AE2_30E3_069C_41C8_050E9CBF627F",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E72A2C3_30A5_069C_41B5_D55782F064DCVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7132C3_30A5_069C_417B_538FCB503842VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7132C3_30A5_069C_417B_538FCB503842VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C28AF2_30E3_067C_41C1_9B7CC5CD1AA0",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7132C3_30A5_069C_417B_538FCB503842VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E71A2C3_30A5_069C_4193_269DC4BEDF58VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E71A2C3_30A5_069C_4193_269DC4BEDF58VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C11AF2_30E3_067C_41C4_F1328C5D7DC4",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E71A2C3_30A5_069C_4193_269DC4BEDF58VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "07 Smriti",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
  },
  "thumbnailUrl": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C_t.jpg",
  "width": 1440,
  "id": "video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7E12C3_30A5_069C_41AE_BE2728027C2DVideoPlayer)",
    "media": "this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7E12C3_30A5_069C_41AE_BE2728027C2DVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C1AAF2_30E3_067C_41B4_38DA67EF426E",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7E12C3_30A5_069C_41AE_BE2728027C2DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A, 0, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7E82C3_30A5_069C_41A8_665381A263EEVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7E82C3_30A5_069C_41A8_665381A263EEVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25C0CAF2_30E3_067C_41C4_0CD3894E4C10",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7E82C3_30A5_069C_41A8_665381A263EEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7FE2C3_30A5_069C_41B5_6B74D595E9CEVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7FE2C3_30A5_069C_41B5_6B74D595E9CEVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FF7AF2_30E3_067C_41C7_4C2D6B3DD90D",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7FE2C3_30A5_069C_41B5_6B74D595E9CEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7C62D3_30A5_06BC_41C7_B7B341B64442VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7C62D3_30A5_06BC_41C7_B7B341B64442VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FFEAF2_30E3_067C_41C4_06A8D60EB56F",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7C62D3_30A5_06BC_41C7_B7B341B64442VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7D42D3_30A5_06BC_41AB_52EF17C442F9VideoPlayer)",
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7D42D3_30A5_06BC_41AB_52EF17C442F9VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FEAAF2_30E3_067C_416E_5A02EB9586B4",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7D42D3_30A5_06BC_41AB_52EF17C442F9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7B52D3_30A5_06BC_41C1_41E3614D86A4VideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7B52D3_30A5_06BC_41C1_41E3614D86A4VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FC8AF2_30E3_067C_41B3_CE0869BBEDA1",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7B52D3_30A5_06BC_41C1_41E3614D86A4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7BC2D3_30A5_06BC_415B_1E905EB85D2BVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7BC2D3_30A5_06BC_415B_1E905EB85D2BVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FB2AF2_30E3_067C_41A3_CB7FE9CC6516",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7BC2D3_30A5_06BC_415B_1E905EB85D2BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3E7802D3_30A5_06BC_419A_E2FDBC7D2CCDVideoPlayer)",
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid3E7802D3_30A5_06BC_419A_E2FDBC7D2CCDVideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "playbackBarHeadHeight": 30,
      "toolTipBorderSize": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBorderRadius": 4,
      "playbackBarHeadBorderRadius": 0,
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarHeadShadowColor": "#000000",
      "progressOpacity": 1,
      "paddingBottom": 0,
      "progressRight": 10,
      "shadow": false,
      "playbackBarBottom": 0,
      "playbackBarHeadShadow": true,
      "progressBorderColor": "#AAAAAA",
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionMode": "blending",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 2,
      "width": "100%",
      "playbackBarHeight": 20,
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "height": "100%",
      "progressBorderRadius": 4,
      "minHeight": 50,
      "progressHeight": 20,
      "borderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 10,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "id": "viewer_uid25FA2AF2_30E3_067C_41BF_32C7620A332B",
      "paddingRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "minWidth": 100
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid3E7802D3_30A5_06BC_419A_E2FDBC7D2CCDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "VideoPlayer",
  "id": "viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": {
   "toolTipBorderRadius": 3,
   "paddingTop": 0,
   "playbackBarHeadHeight": 30,
   "toolTipBorderSize": 1,
   "toolTipFontColor": "#606060",
   "toolTipFontSize": 12,
   "toolTipFontStyle": "normal",
   "toolTipFontWeight": "normal",
   "toolTipShadowOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "progressBarBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderRadius": 4,
   "playbackBarHeadBorderRadius": 0,
   "propagateClick": false,
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "progressOpacity": 1,
   "paddingBottom": 0,
   "progressRight": 10,
   "shadow": false,
   "playbackBarBottom": 0,
   "playbackBarHeadShadow": true,
   "progressBorderColor": "#AAAAAA",
   "toolTipPaddingBottom": 4,
   "class": "ViewerArea",
   "playbackBarHeadOpacity": 1,
   "borderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBorderSize": 0,
   "toolTipTextShadowOpacity": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarBorderRadius": 4,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarOpacity": 1,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBarOpacity": 1,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "progressBorderSize": 2,
   "width": "100%",
   "playbackBarHeight": 20,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "height": "100%",
   "progressBorderRadius": 4,
   "minHeight": 50,
   "progressHeight": 20,
   "borderSize": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowColor": "#333333",
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipOpacity": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressLeft": 10,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarLeft": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "id": "viewer_uid09399F76_2B68_70BA_41BB_36C25CD778EC",
   "paddingRight": 0,
   "progressBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBorderSize": 2,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarRight": 0,
   "transitionDuration": 500,
   "toolTipShadowSpread": 0,
   "playbackBarBorderColor": "#AAAAAA",
   "minWidth": 100
  }
 },
 {
  "class": "PlayList",
  "id": "playList_25F9CB01_30E3_079C_41B9_3342AE4076E0",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer)",
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "player": "this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F9CB01_30E3_079C_41B9_3342AE4076E0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F9CB01_30E3_079C_41B9_3342AE4076E0, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_25F99B01_30E3_079C_41C2_B5F2D2A82D2D",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F99B01_30E3_079C_41C2_B5F2D2A82D2D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F99B01_30E3_079C_41C2_B5F2D2A82D2D, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_25F9AB01_30E3_079C_4198_4339F465010A",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F9AB01_30E3_079C_4198_4339F465010A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F9AB01_30E3_079C_4198_4339F465010A, 0, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "03 Ramprasad",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37.mp4"
  },
  "thumbnailUrl": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37_t.jpg",
  "width": 1440,
  "id": "video_334B0411_2B57_B076_41AC_7C1A8BDC1C37",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_25F86B01_30E3_079C_41C1_01ED1A25DA20",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_334B0411_2B57_B076_41AC_7C1A8BDC1C37",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F86B01_30E3_079C_41C1_01ED1A25DA20, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F86B01_30E3_079C_41C1_01ED1A25DA20, 0, this.video_334B0411_2B57_B076_41AC_7C1A8BDC1C37)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "05 Nikitha",
  "video": {
   "height": 1080,
   "width": 1440,
   "class": "VideoResource",
   "mp4Url": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02.mp4"
  },
  "thumbnailUrl": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02_t.jpg",
  "width": 1440,
  "id": "video_3EC6271F_2B57_B06A_4179_5A8542744F02",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_25F83B01_30E3_079C_41A5_3DDA7107DE5F",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_3EC6271F_2B57_B06A_4179_5A8542744F02",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F83B01_30E3_079C_41A5_3DDA7107DE5F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F83B01_30E3_079C_41A5_3DDA7107DE5F, 0, this.video_3EC6271F_2B57_B06A_4179_5A8542744F02)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_25F8FB01_30E3_079C_4195_D88A43A8BD8D",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F8FB01_30E3_079C_4195_D88A43A8BD8D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F8FB01_30E3_079C_4195_D88A43A8BD8D, 0, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_25F89B01_30E3_079C_4192_EF4251F1F589",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F89B01_30E3_079C_4192_EF4251F1F589, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F89B01_30E3_079C_4192_EF4251F1F589, 0, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_25F76B01_30E3_079C_41B0_418645615C70",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_25F76B01_30E3_079C_41B0_418645615C70, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_25F76B01_30E3_079C_41B0_418645615C70, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 "this.Menu_25E23B30_30E3_07FC_41AF_13695C539012",
 {
  "class": "FadeOutEffect",
  "id": "effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "class": "FadeInEffect",
  "id": "effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_225DC991_2FAA_5DB6_41C5_9170F5257388",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "class": "FadeInEffect",
  "id": "effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "class": "FadeInEffect",
  "id": "effect_21084874_2FAA_5B7E_4192_3BBB56EDF229",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_19316399_289D_D724_41C3_5328AD97CF46",
  "easing": "cubic_in",
  "duration": 100
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_325871ED_2F95_BACE_41C2_E393BA0C264F",
  "easing": "cubic_out",
  "duration": 500
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "levels": [
   {
    "height": 2500,
    "width": 4000,
    "class": "ImageResourceLevel",
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "height": 1280,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "height": 640,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "height": 320,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8"
 },
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25D48AC3_30E3_069C_41C4_5116049A2842"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E6922E2_30A5_069C_41B6_78D33FB7A48A.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3DD3C54D_30A5_03A7_41AD_36313EC411A2",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1214"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25D11AD2_30E3_06BD_41B7_441AC1A3868C"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E56C2E2_30A5_069C_41BD_28A297EE981A.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D21C56D_30A5_0264_41B3_EEFF6FEE90FB",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1235"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25D09AD2_30E3_06BD_41C4_47B27341FCA3"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5762E2_30A5_069C_41C1_47C9326A3555.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D3E156D_30A5_0264_41C2_31EF42C38102",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1236"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CFCAD2_30E3_06BD_41C2_4C40825DF78A"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5712E2_30A5_069C_41C7_BC9019283048.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D3F556D_30A5_0264_41BD_6B110658CD1E",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1237"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_31509B93_2B78_507A_41BE_6FF586B6E809",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CE6AD2_30E3_06BD_41AD_B2E51E5ED82A"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E57A2E2_30A5_069C_41A4_840987970388.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D3C556D_30A5_0264_41B4_972F789BDA91",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1238"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_03DF8247_2B58_D0DA_41C0_97250405E525",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CEFAD2_30E3_06BD_419A_E1C53008646A"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5432F2_30A5_067C_41C1_286B08F212E8.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D3A856D_30A5_0264_41B4_C6872496D7B8",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1239"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CC4AD2_30E3_06BD_41A7_4C87ABFDA28F"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E54C2F2_30A5_067C_41A4_2114C4A65A81.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3DD0D54D_30A5_03A7_41C3_EC34A41D52E3",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1215"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_32F9A509_2B79_D056_41C3_C9791435C04A",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CCBAE2_30E3_069C_41B4_07B33B613B4B"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5552F2_30A5_067C_417F_7429517B36F8.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D20155D_30A5_03A4_41BF_1378F3FB8BAE",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1233"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CBFAE2_30E3_069C_41C5_310636DB474D"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E55E2F2_30A5_067C_41BA_2F63F69C242F.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D20D55D_30A5_03A4_41C3_17A38E7D48C6",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1234"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25CABAE2_30E3_069C_41A6_6488E99C0EB1"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5262F2_30A5_067C_41B5_A9FCA2BAF466.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3DD1854D_30A5_03A7_41AA_49FC80695F3D",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1216"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C8AAE2_30E3_069C_41BA_00F3854CFB6B"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5202F2_30A5_067C_418F_ECE965E569FB.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2EB54D_30A5_03A7_41AB_CC280C2D610E",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1217"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C7CAE2_30E3_069C_41A5_E7682D65B29B"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5372F2_30A5_067C_41C4_BDF213DDB70B.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3DD1354D_30A5_03A7_41A4_7C5A72D16E97",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1218"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C67AE2_30E3_069C_41B5_03918757CB74"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5302F2_30A5_067C_41BC_47583B3B8508.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2E154D_30A5_03A7_41C5_5F526B4EFBD7",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1219"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C6BAE2_30E3_069C_41C6_AC9615E11FEE"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E53A2F2_30A5_067C_41C5_5F41461F6FD0.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2FC55D_30A5_03A4_416B_4F61E8CD6665",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1220"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C5DAE2_30E3_069C_4189_681981CFA76F"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5032F2_30A5_067C_41BC_771AF2EDB98E.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2CD55D_30A5_03A4_41A3_D92A6685EF5B",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1221"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C40AE2_30E3_069C_41C8_050E9CBF627F"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E50C2F2_30A5_067C_41BC_A448859E02CB.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2D855D_30A5_03A4_41B9_67A4BCF81F48",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1222"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C28AF2_30E3_067C_41C1_9B7CC5CD1AA0"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5152F2_30A5_067C_41C6_6992456F6CD0.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2A255D_30A5_03A4_41B3_A20DF306542E",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1223"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C11AF2_30E3_067C_41C4_F1328C5D7DC4"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E51F2F2_30A5_067C_41BA_9C40D0C3B8EF.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D2B255D_30A5_03A4_41C7_425E7AA8CEB2",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1224"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C1AAF2_30E3_067C_41B4_38DA67EF426E"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5182F2_30A5_067C_41C1_33B52ACD107A.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D28655D_30A5_03A4_41B5_8EA2274B56D6",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1225"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_195005A5_2B58_D05E_41AE_B430F46606C7",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25C0CAF2_30E3_067C_41C4_0CD3894E4C10"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5E12F2_30A5_067C_41A9_73D89D8C8691.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D29755D_30A5_03A4_41B8_0771C8192A62",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1226"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FF7AF2_30E3_067C_41C7_4C2D6B3DD90D"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5152F2_30A5_067C_41C1_26C20EDB9A05.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D26055D_30A5_03A4_41A6_4B79D9469FFD",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1227"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_184933F0_2B58_57B6_4188_25FA6469F73E",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FFEAF2_30E3_067C_41C4_06A8D60EB56F"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E51D2F2_30A5_067C_41B2_7F97C7E13799.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D27455D_30A5_03A4_41AE_92A20F9C03C3",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1228"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FEAAF2_30E3_067C_416E_5A02EB9586B4"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5E62F2_30A5_067C_41A9_06E057D1C204.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D25A55D_30A5_03A4_41BE_32D9A22852A0",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1229"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FC8AF2_30E3_067C_41B3_CE0869BBEDA1"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5EF2F2_30A5_067C_41B9_D343EB518E64.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D24555D_30A5_03A4_41AA_DAA1891612FB",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1230"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FB2AF2_30E3_067C_41A3_CB7FE9CC6516"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5E82F2_30A5_067C_41B7_928E5F8AACAC.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D22B55D_30A5_03A4_41A9_A18C9E541F35",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1231"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
 {
  "layout": "vertical",
  "closeButtonBorderRadius": 0,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingTop": 0,
  "modal": true,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarWidth": 10,
  "shadowOpacity": 0.5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "footerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "footerBackgroundOpacity": 0,
  "gap": 10,
  "closeButtonIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "propagateClick": false,
  "titleFontSize": 14,
  "contentOpaque": false,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "titlePaddingTop": 5,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "verticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "class": "Window",
  "borderRadius": 5,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "backgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid25FA2AF2_30E3_067C_41BF_32C7620A332B"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarVisible": "rollOver",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "closeButtonIconColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "close": "this.PlayList_3E5F22F2_30A5_067C_41B1_A8F3FAB4A8BF.set('selectedIndex', -1);",
  "closeButtonIconHeight": 20,
  "id": "window_3D23F55D_30A5_03A4_41C7_54DA9DFCF978",
  "shadowSpread": 1,
  "bodyPaddingRight": 0,
  "paddingRight": 0,
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window1232"
  },
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "minWidth": 20,
  "closeButtonPressedIconColor": "#888888"
 },
 "this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
 {
  "automaticZoomSpeed": 10,
  "id": "camera_255DBC2A_30E3_01EC_41B5_152AD3B52C5A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.12,
     "pitchSpeed": 108,
     "easing": "cubic_in_out",
     "targetYaw": 14.65,
     "yawSpeed": 216,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.15,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -43.37,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "targetPitch": 7.45,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_2549BC98_30E3_02AC_41A5_CEF637576266",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.73,
     "pitchSpeed": 53.07,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 105.62,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -20.7,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -13.03,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.1,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -21.49,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_25736CE6_30E3_0264_41C1_E8E25B749B37",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 4.55,
     "pitchSpeed": 8,
     "easing": "cubic_in_out",
     "targetYaw": -76.91,
     "yawSpeed": 15.06,
     "class": "TargetPanoramaCameraMovement",
     "path": "longest"
    },
    {
     "targetPitch": 5.85,
     "pitchSpeed": 27.75,
     "easing": "cubic_in_out",
     "targetYaw": 137.15,
     "yawSpeed": 54.75,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": 1.23,
     "pitchSpeed": 28.82,
     "easing": "cubic_in_out",
     "targetYaw": -117.41,
     "yawSpeed": 56.9,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_251BAD63_30E3_039C_41C4_2969189C8165",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -2.63,
     "pitchSpeed": 70.25,
     "easing": "cubic_in_out",
     "targetYaw": -174.76,
     "yawSpeed": 140.14,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.19,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.76,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.37,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -25.93,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_2502DDD0_30E3_02BC_41B9_C66B34C8736D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -14.17,
     "pitchSpeed": 3.96,
     "easing": "cubic_in_out",
     "targetYaw": -67.48,
     "yawSpeed": 6.96,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -30.29,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.1,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.42,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -21.75,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_252CBE6C_30E3_1E64_41B9_21E5B64375D1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -1.17,
     "pitchSpeed": 5.06,
     "easing": "linear",
     "targetYaw": 128.48,
     "yawSpeed": 9.16,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -3.21,
     "pitchSpeed": 22.4,
     "easing": "cubic_in_out",
     "targetYaw": 162.53,
     "yawSpeed": 44,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -1.64,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -137.45,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, null, null, false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, null, null, false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, null, null, false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, null, null, false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_26D3FECA_30E3_1EAC_4181_077B2B2FA98E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.73,
     "pitchSpeed": 108,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 216,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -20.7,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -13.03,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.1,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -21.49,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_26F6BF18_30E3_1FAC_41C3_0D6278149A82",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -3.35,
     "pitchSpeed": 64.49,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 128.58,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -8.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -8.67,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.54,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.63,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.07,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.46,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_26971F66_30E3_1E64_41B5_FE143E67744A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 4.55,
     "pitchSpeed": 15.5,
     "easing": "cubic_in_out",
     "targetYaw": -76.91,
     "yawSpeed": 30.14,
     "class": "TargetPanoramaCameraMovement",
     "path": "longest"
    },
    {
     "targetPitch": 5.85,
     "pitchSpeed": 27.75,
     "easing": "cubic_in_out",
     "targetYaw": 137.15,
     "yawSpeed": 54.75,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": 1.23,
     "pitchSpeed": 28.82,
     "easing": "cubic_in_out",
     "targetYaw": -117.41,
     "yawSpeed": 56.9,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_26B87FC4_30E3_1EA4_41B3_F09EDFAFFA80",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -7.62,
     "pitchSpeed": 108,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 216,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.68,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -19.48,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.06,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.71,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -11.81,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -15.21,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_265BD022_30E3_019C_41B5_3DD81971C329",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -10.63,
     "pitchSpeed": 108,
     "easing": "cubic_in_out",
     "targetYaw": 35.23,
     "yawSpeed": 216,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": 0.04,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -3.44,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -29.16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_267C7070_30E3_027C_41A6_AF87D875E236",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -2.63,
     "pitchSpeed": 26.23,
     "easing": "cubic_in_out",
     "targetYaw": -174.76,
     "yawSpeed": 51.69,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.19,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.76,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -16,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.37,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -25.93,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_261F90AE_30E3_02E5_41C6_12FC2C400245",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -7.62,
     "pitchSpeed": 68.08,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 135.8,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -12.68,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -19.48,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -6.06,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -7.71,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -11.81,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -15.21,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_263FF0ED_30E3_0264_41C3_0CAE52AEE3A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -3.35,
     "pitchSpeed": 14.86,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 28.84,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -8.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -8.67,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -5.54,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.5,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.63,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -10.07,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetPitch": -26.46,
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 4
 },
 {
  "from": "left",
  "class": "SlideInEffect",
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "easing": "cubic_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "class": "FadeOutEffect",
  "id": "effect_262F710C_30E3_03A4_41AC_7F27342C391D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "class": "FadeOutEffect",
  "id": "effect_262F010C_30E3_03A4_41B1_C334B66154EB",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 {
  "class": "FadeOutEffect",
  "id": "effect_262F910C_30E3_03A4_41C3_6D818A915A60",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "class": "FadeOutEffect",
  "id": "effect_262FA10C_30E3_03A4_41C7_2410D25E2B44",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "class": "FadeOutEffect",
  "id": "effect_262E610C_30E3_03A4_41C1_DE7FA92355E3",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "class": "FadeOutEffect",
  "id": "effect_262ED10C_30E3_03A4_41C5_128302358BD7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "class": "FadeOutEffect",
  "id": "effect_262E810C_30E3_03A4_41C6_66FC5557A373",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262D110C_30E3_03A4_41C6_1821F9D03E44",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "class": "FadeOutEffect",
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262D210C_30E3_03A4_41C5_A50362B8692D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "class": "FadeOutEffect",
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262D910C_30E3_03A4_4196_0FD81BFF3953",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "class": "FadeOutEffect",
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262DA10C_30E3_03A4_41B1_53AAB2CA7739",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "class": "FadeOutEffect",
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262CC10C_30E3_03A4_41C4_E00CC7821647",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 {
  "class": "FadeInEffect",
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "class": "FadeOutEffect",
  "id": "effect_262C810C_30E3_03A4_41BB_8B4508CB01E4",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262D311C_30E3_03A4_41BC_C4750566B72C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "class": "FadeOutEffect",
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262DF11C_30E3_03A4_41B8_FEEE0B731C6F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "class": "FadeOutEffect",
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262D911C_30E3_03A4_41B4_2A4994A0724F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "class": "FadeInEffect",
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "class": "FadeOutEffect",
  "id": "effect_262C511C_30E3_03A4_41C0_589E32C695D0",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262C911C_30E3_03A4_41A8_AC6C91C6FCAB",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262C811C_30E3_03A4_41C0_92844D46636F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262B611C_30E3_03A4_41B9_48D9E65576B2",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262B211C_30E3_03A4_41C6_AD1BB68F2801",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262BF11C_30E3_03A4_41A4_F9FB700A09FC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262BB11C_30E3_03A4_4172_9F5F29552E6F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262A711C_30E3_03A4_41BE_ED90338400DE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262A011C_30E3_03A4_41A9_83D418EA4236",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
 {
  "class": "FadeOutEffect",
  "id": "effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262AE11C_30E3_03A4_41C6_3C36C43F26F6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
 {
  "class": "FadeOutEffect",
  "id": "effect_309931C2_2B3A_E700_41BB_D77E5464C333",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_262AB11C_30E3_03A4_41BD_32A886718743",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309931C2_2B3A_E700_41BB_D77E5464C333",
 {
  "class": "FadeInEffect",
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "class": "FadeOutEffect",
  "id": "effect_2629512B_30E3_03E3_4197_5A84AE677014",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2629112B_30E3_03E3_41B6_6F4FA91D8117",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "class": "FadeOutEffect",
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2629C12B_30E3_03E3_41BA_9DB97B7C9E1C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "class": "FadeOutEffect",
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2629812B_30E3_03E3_4193_1C7D1A73151D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "class": "FadeOutEffect",
  "id": "effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2628712B_30E3_03E3_41C4_2562CBA858EE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
 {
  "class": "FadeInEffect",
  "id": "effect_3D6066F9_30A5_0E6C_41C0_D141456B1ADB",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_31459F67_2FAE_D69A_4164_37DF78EF38D3",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2628212B_30E3_03E3_41B5_EE79AF02E15B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "class": "FadeOutEffect",
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2628F12B_30E3_03E3_41C5_A0734675215E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "class": "FadeOutEffect",
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2628A12B_30E3_03E3_41AB_323B5A55BB98",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "class": "FadeInEffect",
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "class": "FadeOutEffect",
  "id": "effect_2627212B_30E3_03E3_41C8_0CBB27A2D1F1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_66A793D3_2B68_57FA_41B8_11E79F904362",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2627912B_30E3_03E3_41B2_D2594B4D34E1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 {
  "class": "FadeInEffect",
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "class": "FadeOutEffect",
  "id": "effect_2627A12B_30E3_03E3_41C2_1CDB6239827B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "class": "FadeOutEffect",
  "id": "effect_2626612B_30E3_03E3_41AF_035A3FE73D95",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "class": "FadeOutEffect",
  "id": "effect_2627312B_30E3_03E3_4195_50A77A508C6E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_222043DD_30DF_06A4_41BF_E943BC8065AF",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2627C13B_30E3_03EC_41BB_8DB698E1B81C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_222043DD_30DF_06A4_41BF_E943BC8065AF",
 {
  "class": "FadeOutEffect",
  "id": "effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2627813B_30E3_03EC_41A1_A9CF5C7FED2A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
 {
  "class": "FadeInEffect",
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "class": "FadeOutEffect",
  "id": "effect_2626613B_30E3_03EC_41C7_7177667CD1CA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
 {
  "class": "FadeOutEffect",
  "id": "effect_2626313B_30E3_03EC_41C5_B80973C3FEF4",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "class": "FadeOutEffect",
  "id": "effect_2626B13B_30E3_03EC_41A4_13CA7D5758BC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_222263DD_30DF_06A4_41BF_6C6BB4439738",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2625713B_30E3_03EC_41C7_C526FC424C4A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_222263DD_30DF_06A4_41BF_6C6BB4439738",
 {
  "class": "FadeOutEffect",
  "id": "effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2625113B_30E3_03EC_41C3_5395AD3D36D9",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
 {
  "class": "FadeInEffect",
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "class": "FadeOutEffect",
  "id": "effect_2625C13B_30E3_03EC_41A2_F7B5C2DE0D5B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
 {
  "class": "FadeOutEffect",
  "id": "effect_2625913B_30E3_03EC_41AC_F3E1800B6BC6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_222493DD_30DF_06A4_41B7_13370B74447E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2624D13B_30E3_03EC_41A9_1BF18BA0E75A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_222493DD_30DF_06A4_41B7_13370B74447E",
 {
  "class": "FadeOutEffect",
  "id": "effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2624813B_30E3_03EC_41C3_EEAEEFC20677",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
 {
  "class": "FadeOutEffect",
  "id": "effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2623013B_30E3_03EC_4176_A08A4CF98C74",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
 {
  "class": "FadeInEffect",
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "class": "FadeOutEffect",
  "id": "effect_2623F13B_30E3_03EC_41BC_26759CC0AECB",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
 {
  "class": "FadeOutEffect",
  "id": "effect_2623813B_30E3_03EC_41C7_1368C336EC01",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2622214B_30E3_03AC_41BD_4BBFC90195BC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
 {
  "class": "FadeInEffect",
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "class": "FadeOutEffect",
  "id": "effect_2622F14B_30E3_03AC_41C6_71E8E02E412A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_63916A56_2B78_F0FA_41B5_906759C4A755",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63916A56_2B78_F0FA_41B5_906759C4A755",
 {
  "class": "FadeOutEffect",
  "id": "effect_2622914B_30E3_03AC_41C7_764CBF67DBFC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2621214B_30E3_03AC_41C1_D0D4B0BB62C5",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
 {
  "class": "FadeInEffect",
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "class": "FadeOutEffect",
  "id": "effect_2621E14B_30E3_03AC_41C2_C64A7299856F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
 {
  "class": "FadeOutEffect",
  "id": "effect_2621B14B_30E3_03AC_41B1_1B2115A7EBAC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
 "this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "class": "FadeOutEffect",
  "id": "effect_2620C14B_30E3_03AC_4185_51178DA3F031",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "class": "FadeOutEffect",
  "id": "effect_2620814B_30E3_03AC_41BA_73C1986B1E42",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DF514B_30E3_03AC_4165_8B25AEBF57A6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DF114B_30E3_03AC_41C0_F0207E5E6752",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "class": "FadeOutEffect",
  "id": "effect_2620414B_30E3_03AC_41B5_B94BE9C44374",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "class": "FadeOutEffect",
  "id": "effect_2620314B_30E3_03AC_41AE_643660505C1E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "class": "FadeOutEffect",
  "id": "effect_2620914B_30E3_03AC_41C8_2580F2C53AB3",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
 "this.effect_269A2071_2B29_F0B6_41B4_001C61C97291",
 "this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
 "this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
 "this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "class": "FadeInEffect",
  "id": "effect_27DF714B_30E3_03AC_41AD_C86BC640B98F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "class": "FadeInEffect",
  "id": "effect_27DF214B_30E3_03AC_41A1_68C3D183B31C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "class": "FadeInEffect",
  "id": "effect_27DFE14B_30E3_03AC_414D_9CCAC8163B49",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "class": "FadeInEffect",
  "id": "effect_27DFA14B_30E3_03AC_417B_A8501D9272C4",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 "this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
 "this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 {
  "class": "FadeInEffect",
  "id": "effect_27DEF15A_30E3_03AC_416B_024A3B56E400",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DE815A_30E3_03AC_41C3_5B6F1A4C1A72",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
 "this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "class": "FadeInEffect",
  "id": "effect_27DD615A_30E3_03AC_41AB_571399D6DB19",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "class": "FadeInEffect",
  "id": "effect_27DD015A_30E3_03AC_41B7_AF587D8AA2C1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "class": "FadeInEffect",
  "id": "effect_27DDC15A_30E3_03AC_4197_FF0D209619F9",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DC515A_30E3_03AC_41AE_4B7617A40722",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DCD15A_30E3_03AC_41AD_7E4319B4694C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 {
  "class": "FadeInEffect",
  "id": "effect_27DC915A_30E3_03AC_41C6_B05E413D5236",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DCA15A_30E3_03AC_41A0_6B0C1E41BD11",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "class": "FadeOutEffect",
  "id": "effect_27DB615A_30E3_03AC_41C3_9E79BB56B7C1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "data": {
   "label": "1. Christmas Upbeat Corporate (Full Version)"
  },
  "autoplay": true,
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "audio": {
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "paddingTop": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadHeight": 30,
  "toolTipFontColor": "#606060",
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "toolTipFontWeight": "normal",
  "toolTipShadowOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderRadius": 0,
  "propagateClick": false,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadowColor": "#000000",
  "progressOpacity": 1,
  "paddingBottom": 0,
  "progressRight": 10,
  "shadow": false,
  "playbackBarBottom": 10,
  "playbackBarHeadShadow": true,
  "progressBorderColor": "#AAAAAA",
  "toolTipPaddingBottom": 4,
  "class": "ViewerArea",
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "progressBackgroundOpacity": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarOpacity": 1,
  "progressBottom": 1,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderSize": 2,
  "width": "100%",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#0066B3",
   "#6BA13C"
  ],
  "height": "100%",
  "progressBorderRadius": 4,
  "minHeight": 50,
  "progressHeight": 20,
  "borderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "top": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "paddingRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "left": 0,
  "playbackBarLeft": 0,
  "transitionDuration": 500,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "minWidth": 100,
  "toolTipShadowSpread": 0
 },
 {
  "layout": "vertical",
  "children": [
   {
    "layout": "absolute",
    "paddingTop": 0,
    "height": "1.983%",
    "scrollBarWidth": 10,
    "width": "100%",
    "minHeight": 1,
    "borderSize": 0,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "id": "Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0",
    "data": {
     "name": "blank space"
    },
    "verticalAlign": "top",
    "class": "Container",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver"
   },
   {
    "paddingTop": 0,
    "height": "5%",
    "width": "100%",
    "borderSize": 0,
    "minHeight": 3,
    "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "maxHeight": 512,
    "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
    "maxWidth": 512,
    "data": {
     "name": "close button"
    },
    "verticalAlign": "middle",
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "right",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 3
   },
   {
    "paddingTop": 0,
    "height": "30%",
    "width": "100%",
    "borderSize": 0,
    "minHeight": 1,
    "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "maxHeight": 850,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
    "maxWidth": 850,
    "data": {
     "name": "LOGO"
    },
    "verticalAlign": "middle",
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "layout": "vertical",
    "children": [
     {
      "paddingTop": 0,
      "height": "306.122%",
      "width": "100%",
      "borderSize": 0,
      "minHeight": 5,
      "url": "skin/Image_227442D1_2F53_0813_41B3_7271F7D70452.png",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 600,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_227442D1_2F53_0813_41B3_7271F7D70452",
      "maxWidth": 1705,
      "data": {
       "name": "Title image"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 5
     }
    ],
    "paddingTop": 0,
    "height": "16.157%",
    "scrollBarWidth": 10,
    "width": "100%",
    "minHeight": 1,
    "borderSize": 0,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "gap": 0,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "data": {
     "name": "Title"
    },
    "verticalAlign": "middle",
    "class": "Container",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver"
   },
   {
    "layout": "horizontal",
    "paddingTop": 0,
    "height": "4.215%",
    "scrollBarWidth": 10,
    "width": "16.667%",
    "minHeight": 1,
    "borderSize": 0,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "id": "Container_063F3017_2894_D12C_41C0_A30FBA33D2C0",
    "data": {
     "name": "menu close button"
    },
    "verticalAlign": "middle",
    "class": "Container",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver"
   },
   {
    "paddingTop": 0,
    "height": "30%",
    "width": "80%",
    "borderSize": 0,
    "minHeight": 20,
    "url": "skin/Image_3E3159F0_2F73_8AD6_41B4_20FEA96870FA.png",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "maxHeight": 600,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF, 'hideEffect', false)",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_3E3159F0_2F73_8AD6_41B4_20FEA96870FA",
    "maxWidth": 1705,
    "data": {
     "name": "about"
    },
    "verticalAlign": "middle",
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 20
   },
   {
    "paddingTop": 0,
    "height": "30%",
    "width": "80%",
    "borderSize": 0,
    "minHeight": 20,
    "url": "skin/Image_3E4240AA_2F72_794A_41C3_4F30D0EF2B1A.png",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "maxHeight": 600,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_225DC991_2FAA_5DB6_41C5_9170F5257388, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_225DC991_2FAA_5DB6_41C5_9170F5257388, 'hideEffect', false)",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_3E4240AA_2F72_794A_41C3_4F30D0EF2B1A",
    "maxWidth": 1705,
    "data": {
     "name": "laboratories"
    },
    "verticalAlign": "middle",
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 20
   },
   {
    "paddingTop": 0,
    "height": "30%",
    "width": "80%",
    "borderSize": 0,
    "minHeight": 20,
    "url": "skin/Image_3E829ED5_2F72_86DE_41C1_E60DBD447748.png",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "maxHeight": 600,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D, 'hideEffect', false)",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_3E829ED5_2F72_86DE_41C1_E60DBD447748",
    "maxWidth": 1705,
    "data": {
     "name": "virtual tour"
    },
    "verticalAlign": "middle",
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 20
   },
   {
    "layout": "horizontal",
    "children": [
     {
      "paddingTop": 0,
      "height": "22%",
      "width": "15%",
      "borderSize": 0,
      "minHeight": 10,
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 512,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "maxWidth": 512,
      "data": {
       "name": "web"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 10
     },
     {
      "paddingTop": 0,
      "height": "22%",
      "width": "15%",
      "borderSize": 0,
      "minHeight": 10,
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 512,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "maxWidth": 512,
      "data": {
       "name": "facebook"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 10
     },
     {
      "paddingTop": 0,
      "height": "22%",
      "width": "15%",
      "borderSize": 0,
      "minHeight": 10,
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 512,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "maxWidth": 512,
      "data": {
       "name": "youtube"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 10
     }
    ],
    "paddingTop": 84,
    "height": "50%",
    "scrollBarWidth": 10,
    "width": "100%",
    "minHeight": 5,
    "borderSize": 0,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "gap": 35,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "paddingBottom": 20,
    "overflow": "scroll",
    "shadow": false,
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "data": {
     "name": "Social Media"
    },
    "verticalAlign": "bottom",
    "class": "Container",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "minWidth": 5,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarWidth": 10,
  "shadowOpacity": 0.4,
  "borderSize": 0,
  "minHeight": 1,
  "creationPolicy": "delayed",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "gap": 10,
  "propagateClick": false,
  "top": "0%",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "contentOpaque": true,
  "shadow": true,
  "bottom": "0%",
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "shadowSpread": 1,
  "shadowVerticalLength": 0,
  "class": "Container",
  "paddingRight": 0,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "horizontal",
  "shadowColor": "#000000",
  "data": {
   "name": "Menu bar"
  },
  "horizontalAlign": "center",
  "backgroundOpacity": 0.75,
  "left": "0%",
  "overflow": "scroll",
  "shadowHorizontalLength": 7,
  "paddingLeft": 0,
  "right": "84.93%",
  "verticalAlign": "top",
  "minWidth": 1
 },
 {
  "paddingTop": 0,
  "height": "3.802%",
  "width": "3.21%",
  "borderSize": 0,
  "minHeight": 1,
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "scaleMode": "fit_inside",
  "propagateClick": false,
  "top": "3.51%",
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_19316399_289D_D724_41C3_5328AD97CF46, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false)",
  "visible": false,
  "paddingBottom": 0,
  "maxHeight": 512,
  "shadow": false,
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "maxWidth": 512,
  "data": {
   "name": "menu button"
  },
  "verticalAlign": "middle",
  "class": "Image",
  "paddingRight": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "left": "1.33%",
  "paddingLeft": 0,
  "minWidth": 1
 },
 {
  "layout": "absolute",
  "children": [
   {
    "layout": "vertical",
    "children": [
     {
      "layout": "horizontal",
      "children": [
       {
        "layout": "absolute",
        "children": [
         {
          "paddingTop": 0,
          "height": "100%",
          "width": "100%",
          "borderSize": 0,
          "minHeight": 1,
          "url": "skin/Image_33470F48_2F93_8736_41C7_C471F2C7FF7C.png",
          "scaleMode": "fit_inside",
          "propagateClick": false,
          "top": "0%",
          "paddingBottom": 0,
          "maxHeight": 133,
          "shadow": false,
          "id": "Image_33470F48_2F93_8736_41C7_C471F2C7FF7C",
          "maxWidth": 1753,
          "data": {
           "name": "popup title"
          },
          "verticalAlign": "middle",
          "class": "Image",
          "paddingRight": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "backgroundOpacity": 0,
          "left": "0%",
          "paddingLeft": 0,
          "minWidth": 1
         }
        ],
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "width": "84.581%",
        "minHeight": 1,
        "borderSize": 0,
        "creationPolicy": "delayed",
        "scrollBarOpacity": 0.5,
        "scrollBarColor": "#000000",
        "gap": 10,
        "propagateClick": false,
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "id": "Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A",
        "data": {
         "name": "popup title container"
        },
        "verticalAlign": "top",
        "class": "Container",
        "paddingRight": 0,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver"
       },
       {
        "layout": "absolute",
        "children": [
         {
          "paddingTop": 0,
          "height": "65.447%",
          "width": "20%",
          "borderSize": 0,
          "minHeight": 1,
          "url": "skin/Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE.png",
          "scaleMode": "fit_inside",
          "propagateClick": false,
          "top": "15.37%",
          "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, this.effect_325871ED_2F95_BACE_41C2_E393BA0C264F, 'hideEffect', false)",
          "paddingBottom": 0,
          "maxHeight": 512,
          "shadow": false,
          "id": "Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE",
          "maxWidth": 512,
          "data": {
           "name": "close button"
          },
          "verticalAlign": "middle",
          "class": "Image",
          "paddingRight": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "right": "11%",
          "minWidth": 1
         }
        ],
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "width": "14.44%",
        "minHeight": 1,
        "borderSize": 0,
        "creationPolicy": "delayed",
        "scrollBarOpacity": 0.5,
        "scrollBarColor": "#000000",
        "gap": 10,
        "propagateClick": false,
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "id": "Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975",
        "data": {
         "name": "closebutton container"
        },
        "verticalAlign": "top",
        "class": "Container",
        "paddingRight": 0,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver"
       }
      ],
      "scrollBarVisible": "rollOver",
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "paddingTop": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "height": "10.107%",
      "scrollBarWidth": 10,
      "width": "99.977%",
      "minHeight": 1,
      "borderSize": 0,
      "creationPolicy": "delayed",
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#000000",
      "gap": 10,
      "propagateClick": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "id": "Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F",
      "data": {
       "name": "popup title bar container"
      },
      "verticalAlign": "middle",
      "class": "Container",
      "paddingRight": 0,
      "borderRadius": 0,
      "backgroundColorDirection": "horizontal",
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "minWidth": 1
     },
     {
      "paddingTop": 0,
      "height": "88.848%",
      "width": "97.576%",
      "borderSize": 0,
      "minHeight": 1,
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 866,
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "maxWidth": 1385,
      "data": {
       "name": "laoratory image"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 1
     },
     {
      "paddingTop": 0,
      "height": "89.788%",
      "width": "97.955%",
      "borderSize": 0,
      "minHeight": 1,
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "scaleMode": "fit_inside",
      "propagateClick": false,
      "maxHeight": 866,
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "maxWidth": 1385,
      "data": {
       "name": "popup image"
      },
      "verticalAlign": "middle",
      "class": "Image",
      "paddingRight": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "minWidth": 1
     },
     {
      "layout": "vertical",
      "itemOpacity": 1,
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "itemLabelGap": 0,
      "paddingTop": 10,
      "itemThumbnailShadowVerticalLength": 3,
      "scrollBarWidth": 10,
      "minWidth": 5,
      "itemPaddingRight": 3,
      "itemThumbnailShadowColor": "#000000",
      "itemLabelFontWeight": "bold",
      "itemThumbnailShadowSpread": 1,
      "itemPaddingBottom": 3,
      "gap": 5,
      "itemThumbnailScaleMode": "fit_outside",
      "propagateClick": false,
      "itemMode": "normal",
      "itemLabelFontStyle": "normal",
      "playList": "this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
      "paddingBottom": 10,
      "shadow": false,
      "selectedItemLabelFontColor": "#FFCC00",
      "verticalAlign": "top",
      "class": "ThumbnailList",
      "itemBackgroundColorRatios": [],
      "borderRadius": 5,
      "itemThumbnailHeight": 100,
      "itemThumbnailShadowHorizontalLength": 3,
      "itemLabelFontSize": 20,
      "horizontalAlign": "left",
      "backgroundOpacity": 0.78,
      "paddingLeft": 20,
      "scrollBarVisible": "rollOver",
      "itemLabelHorizontalAlign": "center",
      "itemBorderRadius": 0,
      "itemBackgroundColorDirection": "vertical",
      "itemHorizontalAlign": "center",
      "itemLabelPosition": "right",
      "backgroundColorRatios": [
       0,
       1
      ],
      "height": "89.788%",
      "width": "99.977%",
      "itemBackgroundColor": [],
      "minHeight": 5,
      "selectedItemLabelFontWeight": "bold",
      "rollOverItemBackgroundOpacity": 0,
      "borderSize": 0,
      "itemLabelTextDecoration": "none",
      "rollOverItemLabelFontColor": "#F06436",
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#FFFFFF",
      "itemThumbnailShadow": true,
      "itemBackgroundOpacity": 0,
      "itemPaddingTop": 3,
      "itemThumbnailWidth": 100,
      "scrollBarMargin": 2,
      "rollOverItemLabelFontWeight": "bold",
      "rollOverItemLabelFontSize": 20,
      "itemLabelFontFamily": "Arial",
      "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B",
      "itemThumbnailShadowBlurRadius": 8,
      "paddingRight": 20,
      "backgroundColorDirection": "horizontal",
      "itemThumbnailBorderRadius": 100,
      "data": {
       "name": "panaroma list"
      },
      "itemPaddingLeft": 3,
      "itemVerticalAlign": "middle",
      "itemLabelFontColor": "#FFFFFF",
      "itemThumbnailShadowOpacity": 0.54,
      "itemThumbnailOpacity": 1
     }
    ],
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#006CB5",
     "#71A348"
    ],
    "paddingTop": 0,
    "backgroundColorRatios": [
     0.02,
     1
    ],
    "scrollBarWidth": 10,
    "borderSize": 0,
    "minHeight": 1,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "gap": 0,
    "propagateClick": false,
    "top": "24.36%",
    "scrollBarMargin": 2,
    "visible": false,
    "paddingBottom": 0,
    "contentOpaque": false,
    "shadow": false,
    "bottom": "5.55%",
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "overflow": "scroll",
    "class": "Container",
    "paddingRight": 0,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "popup container"
    },
    "horizontalAlign": "left",
    "backgroundOpacity": 0.75,
    "left": "8.08%",
    "verticalAlign": "top",
    "paddingLeft": 0,
    "right": "11.3%",
    "minWidth": 1
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "minHeight": 1,
    "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "top": "0%",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 600,
    "shadow": false,
    "bottom": "75%",
    "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
    "maxWidth": 1705,
    "data": {
     "name": "phytochemistry sticker"
    },
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "left": "57%",
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "right": "3%",
    "minWidth": 1
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "minHeight": 1,
    "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "top": "0%",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 600,
    "shadow": false,
    "bottom": "75%",
    "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
    "maxWidth": 1705,
    "data": {
     "name": "bio assay sticker"
    },
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "left": "57%",
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "right": "3%",
    "minWidth": 1
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "minHeight": 1,
    "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "top": "0%",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 600,
    "shadow": false,
    "bottom": "75%",
    "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
    "maxWidth": 1705,
    "data": {
     "name": "microbiology sticker"
    },
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "left": "57%",
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "right": "3%",
    "minWidth": 1
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "minHeight": 1,
    "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
    "scaleMode": "fit_inside",
    "propagateClick": false,
    "top": "0%",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 600,
    "shadow": false,
    "bottom": "75%",
    "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
    "maxWidth": 1705,
    "data": {
     "name": "cif sticker"
    },
    "class": "Image",
    "paddingRight": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "left": "57%",
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "right": "3%",
    "minWidth": 1
   }
  ],
  "paddingTop": 0,
  "height": "99.917%",
  "scrollBarWidth": 10,
  "width": "84.956%",
  "minHeight": 1,
  "borderSize": 0,
  "creationPolicy": "delayed",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "gap": 10,
  "propagateClick": false,
  "contentOpaque": false,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "bottom": "0%",
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "data": {
   "name": "no menu area"
  },
  "class": "Container",
  "paddingRight": 0,
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "backgroundOpacity": 0,
  "verticalAlign": "top",
  "paddingLeft": 0,
  "right": "0%",
  "minWidth": 1,
  "scrollBarVisible": "rollOver"
 },
 {
  "paddingTop": 0,
  "height": "13.636%",
  "width": "7.511%",
  "borderSize": 0,
  "minHeight": 1,
  "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
  "scaleMode": "fit_inside",
  "propagateClick": false,
  "top": "3.55%",
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "visible": false,
  "paddingBottom": 0,
  "maxHeight": 850,
  "shadow": false,
  "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
  "maxWidth": 850,
  "data": {
   "name": "Home logo"
  },
  "verticalAlign": "middle",
  "class": "Image",
  "paddingRight": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "left": "1.81%",
  "paddingLeft": 0,
  "minWidth": 1
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderSize": 0,
  "minHeight": 0,
  "propagateClick": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent10489"
  },
  "class": "UIComponent",
  "paddingRight": 0,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55,
  "left": 0,
  "paddingLeft": 0,
  "right": 0,
  "minWidth": 0
 },
 {
  "backgroundColor": [],
  "paddingTop": 0,
  "backgroundColorRatios": [],
  "borderSize": 0,
  "minHeight": 0,
  "propagateClick": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage10490"
  },
  "class": "ZoomImage",
  "paddingRight": 0,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "left": 0,
  "paddingLeft": 0,
  "right": 0,
  "minWidth": 0
 },
 {
  "layout": "horizontal",
  "data": {
   "name": "CloseButton10491"
  },
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontSize": 12,
  "mode": "push",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "textDecoration": "none",
  "minHeight": 0,
  "borderSize": 0,
  "fontFamily": "Arial",
  "gap": 5,
  "iconWidth": 20,
  "fontStyle": "normal",
  "propagateClick": false,
  "fontColor": "#FFFFFF",
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "iconColor": "#000000",
  "shadow": false,
  "id": "closeButtonPopupPanorama",
  "shadowSpread": 1,
  "iconHeight": 20,
  "verticalAlign": "middle",
  "class": "CloseButton",
  "paddingRight": 5,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "backgroundOpacity": 0.3,
  "label": "",
  "iconBeforeLabel": true,
  "paddingLeft": 5,
  "right": 10,
  "borderColor": "#000000",
  "minWidth": 0,
  "rollOverIconColor": "#666666",
  "pressedIconColor": "#888888"
 }
], 
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "width": "100%",
 "minHeight": 20,
 "borderSize": 0,
 "desktopMipmappingEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player14994"
 },
 "verticalAlign": "top",
 "class": "Player",
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "scrollBarMargin": 2,
 "creationPolicy": "delayed",
 "horizontalAlign": "left",
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.syncPlaylists([this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_25F9CB01_30E3_079C_41B9_3342AE4076E0.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "mouseWheelEnabled": false
})