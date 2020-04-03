TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "id": "Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
   "label": "Media",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "label": "HOME",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "PHYTOCHEMISTRY",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "5",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "CENTRAL INSTRUMENTATION FACILITY",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "8",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "10",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "11",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "12",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "13",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000"
  },
  "class": "Panorama",
  "pitch": 0,
  "label": "HOME",
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "backgroundOpacity": 0,
   "minWidth": 40,
   "id": "IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B",
   "mode": "push",
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "class": "IconButton",
   "maxWidth": 50,
   "cursor": "hand",
   "paddingTop": 0,
   "maxHeight": 50,
   "width": 46.5,
   "verticalAlign": "middle",
   "borderSize": 0,
   "height": 45.5,
   "shadow": false,
   "iconURL": "skin/IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B.png",
   "borderRadius": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "minHeight": 40
  },
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':1,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':1,'iconHeight':20,'rollOverBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 118,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.49,
        "yaw": -170.64,
        "pitch": -41.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.64,
        "hfov": 10.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 236,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -41.57
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_352C3929_3FFB_04E5_41B0_F8F25C4FE25A, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807, '95%', '95%', true, true); this.PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807.set('selectedIndex', 0); ; this.viewer_uid2FFCB7BD_3FFD_0BDD_41A4_5BD2DF79424EVideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": false,
      "id": "overlay_2595973C_2AFA_AB00_415B_ADC56B4BBAF6",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 75,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.91,
        "yaw": 24.44,
        "pitch": -6.14
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 24.44,
        "hfov": 8.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 144,
           "width": 151,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -6.14
       }
      ]
     },
     {
      "rotationX": 0,
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": -170.64,
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "hfov": 10.49,
      "popupMaxWidth": "45%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 640,
         "width": 1024,
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "popupMaxHeight": "45%",
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 24.44,
      "showEasing": "cubic_in",
      "pitch": -6.14,
      "rotationZ": 0,
      "id": "popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 1080,
       "width": 1440,
       "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
      },
      "hfov": 8.91,
      "popupMaxWidth": "95%",
      "rotationX": 0,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "autoplay": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_6C6DC8F3_40FB_0565_4192_90BAC7DD3238); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 89,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.3,
        "yaw": 128.9,
        "pitch": -28.55
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 128.9,
        "hfov": 9.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 178,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -28.55
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
  "class": "Panorama",
  "pitch": 0,
  "label": "PHYTOCHEMISTRY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -45.16,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_6A7F2A02_40FB_04A7_41B7_1A8F86589177); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 44,
              "width": 130,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.72,
           "yaw": -45.16,
           "pitch": -18.35
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -45.16,
           "hfov": 14.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 88,
              "width": 261,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -18.35
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "vfov": 180,
     "hfovMax": 120,
     "partial": false,
     "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
     "class": "Panorama",
     "pitch": 0,
     "label": "5",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 128.9,
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "yaw": -45.16,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 128.9,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 130.11,
   "pitch": -2.82
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_30C1C393_2FDB_CDBA_41C3_1FC588B0C473, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, this.effect_30C1C393_2FDB_CDBA_41C3_1FC588B0C473, 'showEffect', false)",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_6C429929_40FB_04E5_41C5_1F6D6B7883BD); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 96,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.04,
        "yaw": 12.85,
        "pitch": -14.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.85,
        "hfov": 11.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 192,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -14.56
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 44,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 12.33,
        "pitch": -6.88
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.33,
        "hfov": 5.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 89,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.88
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_350A793B_3FFB_04E5_41A3_2685ED86FE16, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F, this.PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4, '95%', '95%', true, true); this.PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4.set('selectedIndex', 0); ; this.viewer_uid2FFB87C1_3FFD_0BA5_41AC_EA49EC2FA783VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F60ADD7_2B29_F3FA_41C1_3A789B8B4D39",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 66,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.83,
        "yaw": 39.7,
        "pitch": -8.62
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 39.7,
        "hfov": 7.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 133,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -8.62
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 39.7,
      "showEasing": "cubic_in",
      "pitch": -8.62,
      "rotationZ": 0,
      "id": "popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 1080,
       "width": 1440,
       "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
      },
      "hfov": 7.83,
      "popupMaxWidth": "95%",
      "rotationX": 0,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "autoplay": true
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
  "class": "Panorama",
  "pitch": 0,
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -90.53,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_69B239AB_40FB_07E5_41C9_7CD5FC069D4F); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 29,
              "width": 97,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.85,
           "yaw": -90.53,
           "pitch": -20.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.53,
           "hfov": 10.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 58,
              "width": 195,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -20.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3522C92A_3FFB_04E7_41C7_39749CE5F3E8, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33392804_3FFD_04A3_41C3_F3C9A04E032E, '95%', '95%', true, false); this.PlayList_33392804_3FFD_04A3_41C3_F3C9A04E032E.set('selectedIndex', 0); ; this.viewer_uid2FF8A7C3_3FFD_0BA5_419E_AB233B31EBD0VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 87,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.42,
           "yaw": -145.01,
           "pitch": -24.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -145.01,
           "hfov": 9.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 164,
              "width": 174,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -24.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_69BB4999_40FB_07A4_41CA_98AFB9E20666); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 25,
              "width": 85,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.86,
           "yaw": 86.03,
           "pitch": -12.6
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 86.03,
           "hfov": 9.86,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 170,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -12.6
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31509B93_2B78_507A_41BE_6FF586B6E809, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3522492B_3FFB_04E5_41CA_FEB4C24895BB, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3338F80A_3FFD_04A7_41C9_64A61C7B772C, '95%', '95%', true, false); this.PlayList_3338F80A_3FFD_04A7_41C9_64A61C7B772C.set('selectedIndex', 0); ; this.viewer_uid2FF817C4_3FFD_0BA3_41BB_CECB6C41EF26VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_323124BA_2B79_D1AA_414C_5D3AB97511E4",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.84,
           "yaw": 128.52,
           "pitch": -14.03
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 128.52,
           "hfov": 6.84,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -14.03
          }
         ]
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 128.52,
         "showEasing": "cubic_in",
         "pitch": -14.03,
         "rotationZ": 0,
         "id": "popup_31509B93_2B78_507A_41BE_6FF586B6E809",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hfov": 6.84,
         "popupMaxWidth": "95%",
         "rotationX": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": -145.01,
         "showEasing": "cubic_in",
         "pitch": -24.53,
         "rotationZ": 0,
         "id": "popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hfov": 9.42,
         "popupMaxWidth": "95%",
         "rotationX": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_03DF8247_2B58_D0DA_41C0_97250405E525, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3521692C_3FFB_04E3_41C9_419C8AA1BF52, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3338580B_3FFD_04A5_41CF_36A9EC01E639, '95%', '95%', true, false); this.PlayList_3338580B_3FFD_04A5_41CF_36A9EC01E639.set('selectedIndex', 0); ; this.viewer_uid2FF997C5_3FFD_0BAD_4191_AFC5A2A595B2VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_0273C9CA_2B58_73EA_41AA_5B5B9D3B79B5",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7,
           "yaw": 33.51,
           "pitch": -6.36
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 33.51,
           "hfov": 7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -6.36
          }
         ]
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 33.51,
         "showEasing": "cubic_in",
         "pitch": -6.36,
         "rotationZ": 0,
         "id": "popup_03DF8247_2B58_D0DA_41C0_97250405E525",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hfov": 7,
         "popupMaxWidth": "95%",
         "rotationX": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3520592C_3FFB_04E3_41C9_3834F605CFCA, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3339980B_3FFD_04A4_41B1_C41DEF78B6F6, '95%', '95%', true, false); this.PlayList_3339980B_3FFD_04A4_41B1_C41DEF78B6F6.set('selectedIndex', 0); ; this.viewer_uid2FF907C6_3FFD_0BAF_41C7_A97B9B2673DAVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_01D596A0_2B58_7056_41B8_22A4BCD67EE3",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 53,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.33,
           "yaw": 56.43,
           "pitch": -4.79
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 56.43,
           "hfov": 6.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 98,
              "width": 107,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_5_0.png"
             }
            ]
           },
           "pitch": -4.79
          }
         ]
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 56.43,
         "showEasing": "cubic_in",
         "pitch": -4.79,
         "rotationZ": 0,
         "id": "popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hfov": 6.33,
         "popupMaxWidth": "95%",
         "rotationX": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "vfov": 180,
     "hfovMax": 120,
     "partial": false,
     "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
     "class": "Panorama",
     "pitch": 0,
     "label": "8",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -89.79,
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32F9A509_2B79_D056_41C3_C9791435C04A, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3527692D_3FFB_04FD_41B1_681DB07E284B, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427, this.PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10, '95%', '95%', true, true); this.PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10.set('selectedIndex', 0); ; this.viewer_uid2FF607C7_3FFD_0BAC_41C0_39ECB2CD08B3VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_3270CB21_2B78_7059_41C0_F40E41FBCA4E",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 94,
                 "width": 96,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.37,
              "yaw": 145.17,
              "pitch": -24.62
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 145.17,
              "hfov": 10.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 188,
                 "width": 192,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -24.62
             }
            ]
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 145.17,
            "showEasing": "cubic_in",
            "pitch": -24.62,
            "rotationZ": 0,
            "id": "popup_32F9A509_2B79_D056_41C3_C9791435C04A",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "width": 1440,
             "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
            },
            "hfov": 10.37,
            "popupMaxWidth": "95%",
            "rotationX": 0,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_69A4A9CD_40FB_07BD_417D_814132EE4DD3); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 94,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.82,
              "yaw": 86.11,
              "pitch": -13.9
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 86.11,
              "hfov": 10.82,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 52,
                 "width": 188,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -13.9
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3526292E_3FFB_04FF_41A9_0EBCC5423603, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284, '95%', '95%', true, true); this.PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284.set('selectedIndex', 0); ; this.viewer_uid2FF787C8_3FFD_0BA4_41B9_55BCA2B5331EVideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31280070_2B78_50B6_419B_080177D85868",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 40,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.77,
              "yaw": 100.98,
              "pitch": -4.39
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 100.98,
              "hfov": 4.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 80,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -4.39
             }
            ]
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 100.98,
            "showEasing": "cubic_in",
            "pitch": -4.39,
            "rotationZ": 0,
            "id": "popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "width": 1440,
             "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
            },
            "hfov": 4.77,
            "popupMaxWidth": "95%",
            "rotationX": 0,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3525C92F_3FFB_04FD_41C5_584E42212FC9, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3336A80D_3FFD_04BD_41AE_20195D79E41A, '95%', '95%', true, false); this.PlayList_3336A80D_3FFD_04BD_41AE_20195D79E41A.set('selectedIndex', 0); ; this.viewer_uid2FF727D2_3FFD_0BA7_41C2_297D98FCC306VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_310CE2F4_2B69_B1BE_41C5_919AF0474839",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.98,
              "yaw": 47.89,
              "pitch": -8.01
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 47.89,
              "hfov": 6.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -8.01
             }
            ]
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 47.89,
            "showEasing": "cubic_in",
            "pitch": -8.01,
            "rotationZ": 0,
            "id": "popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
             "width": 1920
            },
            "hfov": 6.98,
            "popupMaxWidth": "95%",
            "rotationX": 0,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_69AE69BC_40FB_07DC_41A0_B71B3162FFCE); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 130,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.74,
              "yaw": -89.79,
              "pitch": -27.59
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -89.79,
              "hfov": 13.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 261,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -27.59
             }
            ]
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "rotate": false,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "angle": 0,
            "inertia": false
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "vfov": 180,
        "hfovMax": 120,
        "partial": false,
        "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
        "class": "Panorama",
        "pitch": 0,
        "label": "9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 86.03,
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "yaw": -89.79,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 158.9,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3524E92F_3FFB_04FC_41BA_6F55807F249C, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098, '95%', '95%', true, true); this.PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098.set('selectedIndex', 0); ; this.viewer_uid2FF4F7D4_3FFD_0BA3_419C_6D31211E2698VideoPlayer.play();  }",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35D178C7_2B6B_B1DA_419D_6A9CE0D0D320",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 57,
                    "width": 57,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.78,
                 "yaw": 146.17,
                 "pitch": -0.56
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 146.17,
                 "hfov": 6.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 114,
                    "width": 114,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -0.56
                }
               ]
              },
              {
               "showDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 146.17,
               "showEasing": "cubic_in",
               "pitch": -0.56,
               "rotationZ": 0,
               "id": "popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
               "hideEasing": "cubic_out",
               "hideDuration": 500,
               "loop": false,
               "video": {
                "class": "VideoResource",
                "height": 1080,
                "width": 1440,
                "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
               },
               "hfov": 6.78,
               "popupMaxWidth": "95%",
               "rotationX": 0,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "autoplay": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_69D71963_40FB_0765_41C3_02D422707979); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 31,
                    "width": 104,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.36,
                 "yaw": 158.9,
                 "pitch": -23.27
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 158.9,
                 "hfov": 11.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 63,
                    "width": 208,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -23.27
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_69C91975_40FB_076C_417C_87778CB9F5B5); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 44,
                    "width": 130,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.63,
                 "yaw": -140.96,
                 "pitch": -28.46
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -140.96,
                 "hfov": 13.63,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 88,
                    "width": 261,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -28.46
                }
               ]
              },
              {
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "angle": 0,
               "inertia": false
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "vfov": 180,
           "hfovMax": 120,
           "partial": false,
           "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
           "class": "Panorama",
           "pitch": 0,
           "label": "10",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 86.11,
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "yaw": 158.9,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 99.8,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_351BD930_3FFB_04E3_41CE_F432980BAC02, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3336580F_3FFD_04BD_41CE_7C289A1A968D, '95%', '95%', true, false); this.PlayList_3336580F_3FFD_04BD_41CE_7C289A1A968D.set('selectedIndex', 0); ; this.viewer_uid2FF537D6_3FFD_0BAF_41C4_FFB8AD05B94EVideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_044EDAC0_2B3B_F1D6_41C0_39F09160F6D7",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7,
                    "yaw": -136.73,
                    "pitch": -6.62
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -136.73,
                    "hfov": 7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -6.62
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -136.73,
                  "showEasing": "cubic_in",
                  "pitch": -6.62,
                  "rotationZ": 0,
                  "id": "popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 7,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_351AA931_3FFB_04E5_41A3_26AF357DE551, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3337B80F_3FFD_04BD_41C1_34CA1413691D, '95%', '95%', true, false); this.PlayList_3337B80F_3FFD_04BD_41C1_34CA1413691D.set('selectedIndex', 0); ; this.viewer_uid2FF297D7_3FFD_0BAD_41A9_574490A5CB47VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1BBC0855_2B39_F0FE_41C1_4D698D0C4AA2",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.97,
                    "yaw": 164,
                    "pitch": -8.45
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 164,
                    "hfov": 6.97,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -8.45
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": 164,
                  "showEasing": "cubic_in",
                  "pitch": -8.45,
                  "rotationZ": 0,
                  "id": "popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 6.97,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35186931_3FFB_04E5_41B9_FEC909320A8B, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33370810_3FFD_04A3_41B1_1DEA15B99319, '95%', '95%', true, false); this.PlayList_33370810_3FFD_04A3_41B1_1DEA15B99319.set('selectedIndex', 0); ; this.viewer_uid2FF2F7D8_3FFD_0BA3_41C6_16B08E297389VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B009202_2B38_F05A_41A0_FCD4FB26754D",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.01,
                    "yaw": 124.69,
                    "pitch": -5.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 124.69,
                    "hfov": 7.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": 124.69,
                  "showEasing": "cubic_in",
                  "pitch": -5.48,
                  "rotationZ": 0,
                  "id": "popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 7.01,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_351F2932_3FFB_04E7_41C5_2DE7472966C6, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33375810_3FFD_04A3_41C4_B50E3A2F20E8, '95%', '95%', true, false); this.PlayList_33375810_3FFD_04A3_41C4_B50E3A2F20E8.set('selectedIndex', 0); ; this.viewer_uid2FF277D9_3FFD_0BA5_41B4_EBF498307243VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B7F84CD_2B3F_F1E9_41BD_0AE3BCF1AF31",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.92,
                    "yaw": -61.5,
                    "pitch": -10.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -61.5,
                    "hfov": 6.92,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -10.71
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -61.5,
                  "showEasing": "cubic_in",
                  "pitch": -10.71,
                  "rotationZ": 0,
                  "id": "popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 6.92,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_351EC933_3FFB_04E5_41CD_958153A63D63, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3334A811_3FFD_04A5_41C1_E2F07CD23742, '95%', '95%', true, false); this.PlayList_3334A811_3FFD_04A5_41C1_E2F07CD23742.set('selectedIndex', 0); ; this.viewer_uid2FF3F7DA_3FFD_0BA7_41C1_D4688C5BB75BVideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B72BA2C_2B38_B0AE_4174_164ADBFB86CA",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 38,
                       "width": 38,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.55,
                    "yaw": -76.32,
                    "pitch": -8.8
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -76.32,
                    "hfov": 4.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 77,
                       "width": 77,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -8.8
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -76.32,
                  "showEasing": "cubic_in",
                  "pitch": -8.8,
                  "rotationZ": 0,
                  "id": "popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 4.55,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_351DA933_3FFB_04E5_41C7_A270637FFC20, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3334F812_3FFD_04A7_41C9_E1CDFEB034E3, '95%', '95%', true, false); this.PlayList_3334F812_3FFD_04A7_41C9_E1CDFEB034E3.set('selectedIndex', 0); ; this.viewer_uid2FF367DB_3FFD_0BA5_41CC_B47E092391D8VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A374A24_2B38_505E_41C5_02D82107BC2E",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 31,
                       "width": 34,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.06,
                    "yaw": -112.85,
                    "pitch": -5.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -112.85,
                    "hfov": 4.06,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 63,
                       "width": 68,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_6C571916_40FB_04AC_41CC_E07D55A9890F); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 44,
                       "width": 130,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.67,
                    "yaw": 99.8,
                    "pitch": -28.11
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 99.8,
                    "hfov": 13.67,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 88,
                       "width": 261,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    },
                    "pitch": -28.11
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_6C65F905_40FB_04AD_41A9_422707566ADA); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 27,
                       "width": 102,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.7,
                    "yaw": -95.11,
                    "pitch": -28.68
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -95.11,
                    "hfov": 10.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 205,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    },
                    "pitch": -28.68
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -112.85,
                  "showEasing": "cubic_in",
                  "pitch": -5.48,
                  "rotationZ": 0,
                  "id": "popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "loop": false,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hfov": 4.06,
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 14,
                       "width": 44,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.04,
                    "yaw": -92.84,
                    "pitch": -14.95
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.84,
                    "hfov": 5.04,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 29,
                       "width": 88,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    },
                    "pitch": -14.95
                   }
                  ]
                 },
                 {
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "angle": 0,
                  "inertia": false
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "vfov": 180,
              "hfovMax": 120,
              "partial": false,
              "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
              "class": "Panorama",
              "pitch": 0,
              "label": "11",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 85.77,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35135934_3FFB_04E3_41C4_AA13768DAAA7, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33345812_3FFD_04A7_41CF_EE30F9CD7918, '95%', '95%', true, false); this.PlayList_33345812_3FFD_04A7_41CF_EE30F9CD7918.set('selectedIndex', 0); ; this.viewer_uid334F47E3_3FFD_0B65_4194_47D14025A16CVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.37,
                       "yaw": -37.79,
                       "pitch": -25.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -37.79,
                       "hfov": 6.37,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -25.27
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35126935_3FFB_04ED_41BF_E56D51404035, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3335A813_3FFD_04A5_41B3_54DF3F8293DD, '95%', '95%', true, false); this.PlayList_3335A813_3FFD_04A5_41B3_54DF3F8293DD.set('selectedIndex', 0); ; this.viewer_uid334C97E4_3FFD_0B63_41CB_57789AF4D37FVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 41,
                          "width": 37,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.36,
                       "yaw": -84.17,
                       "pitch": -10.37
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -84.17,
                       "hfov": 4.36,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 83,
                          "width": 74,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -10.37
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_195005A5_2B58_D05E_41AE_B430F46606C7, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35112935_3FFB_04ED_41BA_144DFB6ED892, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C, this.PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D, '95%', '95%', true, true); this.PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D.set('selectedIndex', 0); ; this.viewer_uid334CF7E5_3FFD_0B6D_41C2_0B60519E1B70VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1A1525A4_2B5B_B05E_4196_CE94695CD2F3",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.9,
                       "yaw": -143.61,
                       "pitch": -11.5
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -143.61,
                       "hfov": 6.9,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -11.5
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3512C936_3FFB_04EF_41CD_74365DFD4E3C, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33355814_3FFD_04A3_4198_D490FB95E5E4, '95%', '95%', true, false); this.PlayList_33355814_3FFD_04A3_4198_D490FB95E5E4.set('selectedIndex', 0); ; this.viewer_uid334C37E5_3FFD_0B6D_41B5_BBE52183F023VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1844E73E_2B58_F0AA_41C4_385650C01BC3",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.98,
                       "yaw": -177,
                       "pitch": -7.75
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -177,
                       "hfov": 6.98,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -7.75
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_184933F0_2B58_57B6_4188_25FA6469F73E, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3511F937_3FFB_04ED_41B9_31AE5B32219C, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3332B815_3FFD_04AD_41CA_A5F5B3638024, '95%', '95%', true, false); this.PlayList_3332B815_3FFD_04AD_41CA_A5F5B3638024.set('selectedIndex', 0); ; this.viewer_uid334DA7E6_3FFD_0B6F_41BF_16F9A2324F9BVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19CFD7F5_2B58_7FBE_419B_76A922911F64",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.02,
                       "yaw": 119.8,
                       "pitch": -4.44
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 119.8,
                       "hfov": 7.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -4.44
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35102937_3FFB_04ED_41B9_FB5C0FBF4A7A, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3332F815_3FFD_04AD_41CA_2042360826E5, '95%', '95%', true, false); this.PlayList_3332F815_3FFD_04AD_41CA_2042360826E5.set('selectedIndex', 0); ; this.viewer_uid334DF7E6_3FFD_0B6F_41AF_61A8B1456C8BVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1FAF4C3A_2B58_50AA_41C4_3E08643314EE",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.97,
                       "yaw": 54.34,
                       "pitch": -8.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 54.34,
                       "hfov": 6.97,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -8.27
                      }
                     ]
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -143.61,
                     "showEasing": "cubic_in",
                     "pitch": -11.5,
                     "rotationZ": 0,
                     "id": "popup_195005A5_2B58_D05E_41AE_B430F46606C7",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "width": 1440,
                      "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
                     },
                     "hfov": 6.9,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -177,
                     "showEasing": "cubic_in",
                     "pitch": -7.75,
                     "rotationZ": 0,
                     "id": "popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hfov": 6.98,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": 119.8,
                     "showEasing": "cubic_in",
                     "pitch": -4.44,
                     "rotationZ": 0,
                     "id": "popup_184933F0_2B58_57B6_4188_25FA6469F73E",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hfov": 7.02,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": 54.34,
                     "showEasing": "cubic_in",
                     "pitch": -8.27,
                     "rotationZ": 0,
                     "id": "popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hfov": 6.97,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -37.79,
                     "showEasing": "cubic_in",
                     "pitch": -25.27,
                     "rotationZ": 0,
                     "id": "popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hfov": 6.37,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3517D938_3FFB_04E3_41CF_6DAA8B1A2127, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF, '95%', '95%', true, true); this.PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF.set('selectedIndex', 0); ; this.viewer_uid334AC7E8_3FFD_0B63_41CD_FA5727B6C578VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1F6BFB9E_2B58_706A_41A0_D6359D2FB465",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 36,
                          "width": 38,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_6_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.58,
                       "yaw": -121.3,
                       "pitch": -5.7
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -121.3,
                       "hfov": 4.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 73,
                          "width": 77,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_6_0.png"
                         }
                        ]
                       },
                       "pitch": -5.7
                      }
                     ]
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -121.3,
                     "showEasing": "cubic_in",
                     "pitch": -5.7,
                     "rotationZ": 0,
                     "id": "popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "width": 1440,
                      "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                     },
                     "hfov": 4.58,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -84.17,
                     "showEasing": "cubic_in",
                     "pitch": -10.37,
                     "rotationZ": 0,
                     "id": "popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hfov": 4.36,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "angle": 0,
                     "inertia": false
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_698CC9F1_40FB_0764_41CE_1E259E296D5F); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 33,
                          "width": 117,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.35,
                       "yaw": 85.77,
                       "pitch": -16.65
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 85.77,
                       "hfov": 13.35,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 66,
                          "width": 235,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       },
                       "pitch": -16.65
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_699719DF_40FB_075D_41C4_49C25472ED7F); this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 27,
                          "width": 102,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.18,
                       "yaw": -104.48,
                       "pitch": -22.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -104.48,
                       "hfov": 11.18,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 54,
                          "width": 204,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       },
                       "pitch": -22.58
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "vfov": 180,
                 "hfovMax": 120,
                 "partial": false,
                 "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
                 "class": "Panorama",
                 "pitch": 0,
                 "label": "12",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 97.27,
                   "panorama": {
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "overlays": [
                       {
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "rotate": false,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "angle": 0,
                        "inertia": false
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3516A939_3FFB_04E5_41C4_17876EBD26C4, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_3333D816_3FFD_04AF_41CB_F3D58C10C932, '95%', '95%', true, false); this.PlayList_3333D816_3FFD_04AF_41CB_F3D58C10C932.set('selectedIndex', 0); ; this.viewer_uid334BF7EA_3FFD_0B67_41C1_8032BD35758CVideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_694EB6C3_2B69_D1DA_41C5_644885469A76",
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 45,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.25,
                          "yaw": -66.43,
                          "pitch": -13.29
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -66.43,
                          "hfov": 5.25,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 91,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -13.29
                         }
                        ]
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": -66.43,
                        "showEasing": "cubic_in",
                        "pitch": -13.29,
                        "rotationZ": 0,
                        "id": "popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "loop": false,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "width": 1920
                        },
                        "hfov": 5.25,
                        "popupMaxWidth": "95%",
                        "rotationX": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_35144939_3FFB_04E5_41C1_CC2EE35BE867, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_33332817_3FFD_04AD_41B8_8C52819EBD09, '95%', '95%', true, false); this.PlayList_33332817_3FFD_04AD_41B8_8C52819EBD09.set('selectedIndex', 0); ; this.viewer_uid334887F0_3FFD_0B63_41A9_61BB6D0E007BVideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 66,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.61,
                          "yaw": 48.72,
                          "pitch": -32.46
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 48.72,
                          "hfov": 6.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 129,
                             "width": 132,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -32.46
                         }
                        ]
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": 48.72,
                        "showEasing": "cubic_in",
                        "pitch": -32.46,
                        "rotationZ": 0,
                        "id": "popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "loop": false,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "width": 1920
                        },
                        "hfov": 6.61,
                        "popupMaxWidth": "95%",
                        "rotationX": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_350B493A_3FFB_04E7_41B8_E4D06BAF5390, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_33337818_3FFD_04A3_41B1_50159429F00A, '95%', '95%', true, true); this.PlayList_33337818_3FFD_04A3_41B1_50159429F00A.set('selectedIndex', 0); ; this.viewer_uid3348E7F1_3FFD_0B65_41CA_35E49C333FA2VideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_681A448E_2B79_D06A_41C3_848A63AB0DC7",
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 59,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.92,
                          "yaw": 163.82,
                          "pitch": -10.8
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 163.82,
                          "hfov": 6.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 119,
                             "width": 119,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -10.8
                         }
                        ]
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": 163.82,
                        "showEasing": "cubic_in",
                        "pitch": -10.8,
                        "rotationZ": 0,
                        "id": "popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "loop": false,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "width": 1440,
                         "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                        },
                        "hfov": 6.92,
                        "popupMaxWidth": "95%",
                        "rotationX": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_69C25988_40FB_07A3_41CF_995933A34DC5); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 130,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.58,
                          "yaw": 97.27,
                          "pitch": -28.81
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 97.27,
                          "hfov": 13.58,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 261,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -28.81
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 33,
                             "width": 105,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.37,
                          "yaw": -129.67,
                          "pitch": -24.1
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -129.67,
                          "hfov": 11.37,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 67,
                             "width": 210,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          },
                          "pitch": -24.1
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "vfov": 180,
                    "hfovMax": 120,
                    "partial": false,
                    "cardboardMenu": "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
                    "class": "Panorama",
                    "pitch": 0,
                    "label": "13",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -104.48,
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "yaw": 97.27,
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "hfov": 360,
                    "hfovMin": 120
                   },
                   "yaw": -104.48,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -95.11,
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "yaw": 85.77,
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "hfov": 360,
                 "hfovMin": 120
                },
                "yaw": -95.11,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -140.96,
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "yaw": 99.8,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "hfov": 360,
              "hfovMin": 120
             },
             "yaw": -140.96,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "hfov": 360,
           "hfovMin": 120
          },
          "yaw": 86.11,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "hfov": 360,
        "hfovMin": 120
       },
       "yaw": 86.03,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 12.85,
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "yaw": -90.53,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 12.85,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.23,
   "pitch": -10.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.04,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -29.16,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.9,
   "pitch": -6.73
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -139.92,
   "pitch": -7.62
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 104.63,
   "pitch": -0.76
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.39,
     "easing": "cubic_in_out",
     "targetYaw": -136.42,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.27,
   "pitch": -1.59
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.45,
     "easing": "cubic_in_out",
     "targetYaw": -136.59,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.97,
     "easing": "cubic_in_out",
     "targetYaw": -111.75,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "targetYaw": -83.07,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -58.05,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -2.22,
     "easing": "cubic_in_out",
     "targetYaw": -93.27,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 122.77,
   "pitch": -3.35
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.48,
   "pitch": -14.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -30.29,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.1,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.42,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, null, null, false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, null, null, false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, null, null, false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, null, null, false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.75,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452', this.Image_227442D1_2F53_0813_41B3_7271F7D70452.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0', this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')){ if(this.getKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')) { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, false, -1, this.effect_6A70AA0B_40FB_04A4_41BA_655C6B9DAAD9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_6A774A0C_40FB_04A3_41BB_B07C34975C8B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_6A775A0C_40FB_04A3_41CC_7FF5B4F59C4A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_6A770A0C_40FB_04BC_4178_D754D57B9E14, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')){ if(this.getKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')) { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, false, -1, this.effect_6A771A0D_40FB_04BD_41CB_76BEDCBCCB93, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_6A772A0D_40FB_04BD_41CA_478835F16946, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_6A77CA0E_40FB_04BF_41C7_D3374A9156F7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_6A77DA0E_40FB_04BF_41C9_672458444424, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_6A77EA0E_40FB_04BF_41BD_7244125608A4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_6A779A0F_40FB_04BD_41C5_6FD4BBB29BC4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6A764A0F_40FB_04BD_4182_D93165F05D08, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6A765A0F_40FB_04BC_4177_51D91CBB8063, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6A767A10_40FB_04A3_41B6_614E4D708781, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6A761A10_40FB_04A3_41BB_5F026683BB0C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6A70BA11_40FB_04A5_41C2_D9C2756026FF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A774A11_40FB_04A5_41C4_252342DBBF1D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6A777A11_40FB_04A5_41BE_8E8BBBD4D9D2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6A771A12_40FB_04A7_41A6_AF9ABFC5A6F8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6A772A12_40FB_04A7_41A2_B52EC6BAD893, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A77CA12_40FB_04A7_415A_7A8F28EDFF14, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6A77EA13_40FB_04A5_41B4_645F1132AE73, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_6A778A13_40FB_04A5_4171_6565B6C0D193, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_6A77AA14_40FB_04A3_41B8_55AA9DEA61BB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_6A77BA14_40FB_04A3_41BB_12BA3FB5141F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_6A765A14_40FB_04A3_41B6_009BB4D1821D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_6A767A15_40FB_04AD_41CB_8E9C3FD22B03, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_6A760A15_40FB_04AD_41C8_4AE3FFC9F740, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_6A761A15_40FB_04AD_41CB_B8E8FC75F807, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_6A763A16_40FB_04AF_41B9_CE22884862B0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6A76CA16_40FB_04AF_41C1_8EF34BF5EE02, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A76DA16_40FB_04AF_41C1_AF22DB52D646, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6A76FA17_40FB_04AD_4196_01DD5E5B090E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_6A768A17_40FB_04AD_41C2_6A0766CEB968, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_6A76AA17_40FB_04AC_41A3_E227C58F879C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A754A18_40FB_04A3_41CC_46F291AE8FED, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6A750A18_40FB_04A3_4170_1F13D2DAC8CE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6A751A19_40FB_04A5_41C1_DA006B32802D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6A753A19_40FB_04A5_41AE_26F7DCFE1388, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A75DA19_40FB_04A5_41C9_2E69A03D0638, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A765A1A_40FB_04A7_41C3_4C3DA9A7201F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A766A1A_40FB_04A7_41AF_2FDFE6649E8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A761A1A_40FB_04A4_41CE_8E2FD2136621, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6A762A1B_40FB_04A5_41C3_E707A3F90456, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A763A1B_40FB_04A5_419F_778A86CF569B, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A76DA1C_40FB_04A3_41CC_A40B3E7EE960, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A76EA1C_40FB_04A3_41C2_F848831E8CD8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A768A1C_40FB_04A3_41CF_F8B87D280F9E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6A76BA1D_40FB_04DD_41B6_68995C409C4B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A754A1D_40FB_04DD_4193_6255F7F606E0, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A755A1E_40FB_04DF_41C1_8D4A7A1CE583, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A757A1E_40FB_04DF_41CB_831B4E1F8FB9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "begin": "this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A751A1E_40FB_04DF_41AA_AD17864A657B, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A753A1F_40FB_04DD_41B5_B4479EAE6466, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A75CA1F_40FB_04DD_41C5_9D71692A1E7E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A75EA1F_40FB_04DC_41CE_A9C828C57C98, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A758A20_40FB_04E3_41A9_F0202AE146F6, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A75AA20_40FB_04E3_41CE_6D68CBEA197A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A744A21_40FB_04E5_41A0_5704118FEDE4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_6A747A21_40FB_04E5_41CC_F8B693F07619, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A742A22_40FB_04E7_4171_6B12ED549DB9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A74CA22_40FB_04E7_41A8_A67411568C07, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB"
   }
  ]
 },
 {
  "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452', this.Image_227442D1_2F53_0813_41B3_7271F7D70452.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0', this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')){ if(this.getKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')) { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, false, -1, this.effect_6A74EA22_40FB_04E7_41C8_338C149F7518, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_6A756A23_40FB_04E5_4197_826EAAAA5785, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_6A750A23_40FB_04E5_41B8_57AFEA1D0ACB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_6A751A23_40FB_04E4_41B7_5C9BE89D87BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')){ if(this.getKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')) { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, false, -1, this.effect_6A752A24_40FB_04E3_419A_F8BB80EB9032, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_6A75CA24_40FB_04E3_41CF_2182F08CD792, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_6A75DA25_40FB_04ED_41C6_2E1A62AC1208, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_6A75EA25_40FB_04ED_41CF_54E5079061E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_6A758A25_40FB_04ED_41D0_05FC69B04A7C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_6A759A26_40FB_04EF_41A8_A4E17A18D954, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6A744A26_40FB_04EF_41C8_1BB09641D9A2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6A745A26_40FB_04EF_41AD_47832CEEDFF4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6A747A27_40FB_04ED_41C1_177678D32429, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6A742A27_40FB_04ED_41BB_D70F91EC9E80, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6A74DA28_40FB_04E3_41C1_92ADC5CBCA78, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A748A28_40FB_04E3_41B2_21BF22388E24, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6A749A29_40FB_04E5_4180_0745D74BD7D6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6A74AA29_40FB_04E5_41C4_ABD7E29DAB0B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6A6B4A29_40FB_04E5_41CE_1AC64DF4BE0B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A6B5A2A_40FB_04E7_41A6_2A8809214043, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6A6B7A2A_40FB_04E7_41CE_4C2A783C85B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6A6B2A2B_40FB_04E5_41A8_79D205FF3B52, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6A6BCA2B_40FB_04E5_41B6_476082B09C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
  },
  "label": "03 Ramprasad",
  "width": 1440,
  "loop": false,
  "id": "video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
  "height": 1080,
  "thumbnailUrl": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FFCB7BD_3FFD_0BDD_41A4_5BD2DF79424EVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA3788A_40FB_05A7_41A2_A573ECD95E93",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FFCB7BD_3FFD_0BDD_41A4_5BD2DF79424EVideoPlayer)",
    "start": "this.viewer_uid2FFCB7BD_3FFD_0BDD_41A4_5BD2DF79424EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
  },
  "label": "05 Nikitha",
  "width": 1440,
  "loop": false,
  "id": "video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
  "height": 1080,
  "thumbnailUrl": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FFB87C1_3FFD_0BA5_41AC_EA49EC2FA783VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA2A88D_40FB_05BD_4176_C724B9189D03",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FFB87C1_3FFD_0BA5_41AC_EA49EC2FA783VideoPlayer)",
    "start": "this.viewer_uid2FFB87C1_3FFD_0BA5_41AC_EA49EC2FA783VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4, 0, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
   "width": 1920
  },
  "label": "intro video",
  "width": 1920,
  "loop": true,
  "id": "video_6841836A_29BB_D7E4_41C1_99E27908293D",
  "height": 1080,
  "thumbnailUrl": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_33392804_3FFD_04A3_41C3_F3C9A04E032E",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF8A7C3_3FFD_0BA5_419E_AB233B31EBD0VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA0688F_40FB_05BD_41AD_F582A2E9C894",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF8A7C3_3FFD_0BA5_419E_AB233B31EBD0VideoPlayer)",
    "start": "this.viewer_uid2FF8A7C3_3FFD_0BA5_419E_AB233B31EBD0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33392804_3FFD_04A3_41C3_F3C9A04E032E, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3338F80A_3FFD_04A7_41C9_64A61C7B772C",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF817C4_3FFD_0BA3_41BB_CECB6C41EF26VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA0C88F_40FB_05BC_41C0_EE989E0997AF",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF817C4_3FFD_0BA3_41BB_CECB6C41EF26VideoPlayer)",
    "start": "this.viewer_uid2FF817C4_3FFD_0BA3_41BB_CECB6C41EF26VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3338F80A_3FFD_04A7_41C9_64A61C7B772C, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3338580B_3FFD_04A5_41CF_36A9EC01E639",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF997C5_3FFD_0BAD_4191_AFC5A2A595B2VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA75890_40FB_05A3_41AA_76DCC733DB2D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF997C5_3FFD_0BAD_4191_AFC5A2A595B2VideoPlayer)",
    "start": "this.viewer_uid2FF997C5_3FFD_0BAD_4191_AFC5A2A595B2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3338580B_3FFD_04A5_41CF_36A9EC01E639, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3339980B_3FFD_04A4_41B1_C41DEF78B6F6",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF907C6_3FFD_0BAF_41C7_A97B9B2673DAVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA72891_40FB_05A5_41CD_F9CA9D00CAEB",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF907C6_3FFD_0BAF_41C7_A97B9B2673DAVideoPlayer)",
    "start": "this.viewer_uid2FF907C6_3FFD_0BAF_41C7_A97B9B2673DAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3339980B_3FFD_04A4_41B1_C41DEF78B6F6, 0, '#000000')"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
  },
  "label": "06 Usha T",
  "width": 1440,
  "loop": false,
  "id": "video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
  "height": 1080,
  "thumbnailUrl": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF607C7_3FFD_0BAC_41C0_39ECB2CD08B3VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA61893_40FB_05A5_4193_D5178DF1169F",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF607C7_3FFD_0BAC_41C0_39ECB2CD08B3VideoPlayer)",
    "start": "this.viewer_uid2FF607C7_3FFD_0BAC_41C0_39ECB2CD08B3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10, 0, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
  },
  "label": "12 Angela Paulson",
  "width": 1440,
  "loop": false,
  "id": "video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
  "height": 1080,
  "thumbnailUrl": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF787C8_3FFD_0BA4_41B9_55BCA2B5331EVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA69894_40FB_05A3_4192_08E2997F6513",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF787C8_3FFD_0BA4_41B9_55BCA2B5331EVideoPlayer)",
    "start": "this.viewer_uid2FF787C8_3FFD_0BA4_41B9_55BCA2B5331EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "id": "PlayList_3336A80D_3FFD_04BD_41AE_20195D79E41A",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF727D2_3FFD_0BA7_41C2_297D98FCC306VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA57895_40FB_05AD_41BB_6C116C6D1CF0",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF727D2_3FFD_0BA7_41C2_297D98FCC306VideoPlayer)",
    "start": "this.viewer_uid2FF727D2_3FFD_0BA7_41C2_297D98FCC306VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3336A80D_3FFD_04BD_41AE_20195D79E41A, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF4F7D4_3FFD_0BA3_419C_6D31211E2698VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6BA44896_40FB_05AF_41B4_5BCBDF126154",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF4F7D4_3FFD_0BA3_419C_6D31211E2698VideoPlayer)",
    "start": "this.viewer_uid2FF4F7D4_3FFD_0BA3_419C_6D31211E2698VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "id": "PlayList_3336580F_3FFD_04BD_41CE_7C289A1A968D",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF537D6_3FFD_0BAF_41C4_FFB8AD05B94EVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9B1898_40FB_05A3_41A5_61EDA88BF1C1",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF537D6_3FFD_0BAF_41C4_FFB8AD05B94EVideoPlayer)",
    "start": "this.viewer_uid2FF537D6_3FFD_0BAF_41C4_FFB8AD05B94EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3336580F_3FFD_04BD_41CE_7C289A1A968D, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3337B80F_3FFD_04BD_41C1_34CA1413691D",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF297D7_3FFD_0BAD_41A9_574490A5CB47VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9BF899_40FB_05A5_41C5_EC0DE2077A4D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF297D7_3FFD_0BAD_41A9_574490A5CB47VideoPlayer)",
    "start": "this.viewer_uid2FF297D7_3FFD_0BAD_41A9_574490A5CB47VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3337B80F_3FFD_04BD_41C1_34CA1413691D, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33370810_3FFD_04A3_41B1_1DEA15B99319",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF2F7D8_3FFD_0BA3_41C6_16B08E297389VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9A789A_40FB_05A7_41D0_1873961E1406",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF2F7D8_3FFD_0BA3_41C6_16B08E297389VideoPlayer)",
    "start": "this.viewer_uid2FF2F7D8_3FFD_0BA3_41C6_16B08E297389VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33370810_3FFD_04A3_41B1_1DEA15B99319, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33375810_3FFD_04A3_41C4_B50E3A2F20E8",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF277D9_3FFD_0BA5_41B4_EBF498307243VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9AD89A_40FB_05A4_41B4_248D8F5C5F3D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF277D9_3FFD_0BA5_41B4_EBF498307243VideoPlayer)",
    "start": "this.viewer_uid2FF277D9_3FFD_0BA5_41B4_EBF498307243VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33375810_3FFD_04A3_41C4_B50E3A2F20E8, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3334A811_3FFD_04A5_41C1_E2F07CD23742",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF3F7DA_3FFD_0BA7_41C1_D4688C5BB75BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B99589B_40FB_05A5_4192_BEA5A91B3667",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF3F7DA_3FFD_0BA7_41C1_D4688C5BB75BVideoPlayer)",
    "start": "this.viewer_uid2FF3F7DA_3FFD_0BA7_41C1_D4688C5BB75BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3334A811_3FFD_04A5_41C1_E2F07CD23742, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3334F812_3FFD_04A7_41C9_E1CDFEB034E3",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid2FF367DB_3FFD_0BA5_41CC_B47E092391D8VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B99D89C_40FB_05A3_41C9_BA39A1449F07",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2FF367DB_3FFD_0BA5_41CC_B47E092391D8VideoPlayer)",
    "start": "this.viewer_uid2FF367DB_3FFD_0BA5_41CC_B47E092391D8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3334F812_3FFD_04A7_41C9_E1CDFEB034E3, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33345812_3FFD_04A7_41CF_EE30F9CD7918",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334F47E3_3FFD_0B65_4194_47D14025A16CVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9F489E_40FB_05DC_41B1_E7C6B183616A",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334F47E3_3FFD_0B65_4194_47D14025A16CVideoPlayer)",
    "start": "this.viewer_uid334F47E3_3FFD_0B65_4194_47D14025A16CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33345812_3FFD_04A7_41CF_EE30F9CD7918, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3335A813_3FFD_04A5_41B3_54DF3F8293DD",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334C97E4_3FFD_0B63_41CB_57789AF4D37FVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9F189F_40FB_05DD_4184_A1F245EFB488",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334C97E4_3FFD_0B63_41CB_57789AF4D37FVideoPlayer)",
    "start": "this.viewer_uid334C97E4_3FFD_0B63_41CB_57789AF4D37FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3335A813_3FFD_04A5_41B3_54DF3F8293DD, 0, '#000000')"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
  },
  "label": "07 Smriti",
  "width": 1440,
  "loop": false,
  "id": "video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
  "height": 1080,
  "thumbnailUrl": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334CF7E5_3FFD_0B6D_41C2_0B60519E1B70VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9FF8A0_40FB_05E3_41B7_A60F900E5C50",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334CF7E5_3FFD_0B6D_41C2_0B60519E1B70VideoPlayer)",
    "start": "this.viewer_uid334CF7E5_3FFD_0B6D_41C2_0B60519E1B70VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D, 0, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C)"
   }
  ]
 },
 {
  "id": "PlayList_33355814_3FFD_04A3_4198_D490FB95E5E4",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334C37E5_3FFD_0B6D_41B5_BBE52183F023VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9E48A0_40FB_05E3_41C0_57AFBA2D9587",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334C37E5_3FFD_0B6D_41B5_BBE52183F023VideoPlayer)",
    "start": "this.viewer_uid334C37E5_3FFD_0B6D_41B5_BBE52183F023VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33355814_3FFD_04A3_4198_D490FB95E5E4, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3332B815_3FFD_04AD_41CA_A5F5B3638024",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334DA7E6_3FFD_0B6F_41BF_16F9A2324F9BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9E28A1_40FB_05E5_41C1_55207284394A",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334DA7E6_3FFD_0B6F_41BF_16F9A2324F9BVideoPlayer)",
    "start": "this.viewer_uid334DA7E6_3FFD_0B6F_41BF_16F9A2324F9BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3332B815_3FFD_04AD_41CA_A5F5B3638024, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_3332F815_3FFD_04AD_41CA_2042360826E5",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334DF7E6_3FFD_0B6F_41AF_61A8B1456C8BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9EE8A1_40FB_05E4_41C7_E1A5E8C81EF9",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334DF7E6_3FFD_0B6F_41AF_61A8B1456C8BVideoPlayer)",
    "start": "this.viewer_uid334DF7E6_3FFD_0B6F_41AF_61A8B1456C8BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3332F815_3FFD_04AD_41CA_2042360826E5, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334AC7E8_3FFD_0B63_41CD_FA5727B6C578VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9D38A3_40FB_05E5_41CC_B6329462F984",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334AC7E8_3FFD_0B63_41CD_FA5727B6C578VideoPlayer)",
    "start": "this.viewer_uid334AC7E8_3FFD_0B63_41CD_FA5727B6C578VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "id": "PlayList_3333D816_3FFD_04AF_41CB_F3D58C10C932",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334BF7EA_3FFD_0B67_41C1_8032BD35758CVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9C88A5_40FB_05ED_41C6_81351FF8B94F",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334BF7EA_3FFD_0B67_41C1_8032BD35758CVideoPlayer)",
    "start": "this.viewer_uid334BF7EA_3FFD_0B67_41C1_8032BD35758CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3333D816_3FFD_04AF_41CB_F3D58C10C932, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33332817_3FFD_04AD_41B8_8C52819EBD09",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid334887F0_3FFD_0B63_41A9_61BB6D0E007BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B9368A6_40FB_05EF_41B1_EE5B8F8DD18D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid334887F0_3FFD_0B63_41A9_61BB6D0E007BVideoPlayer)",
    "start": "this.viewer_uid334887F0_3FFD_0B63_41A9_61BB6D0E007BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33332817_3FFD_04AD_41B8_8C52819EBD09, 0, '#000000')"
   }
  ]
 },
 {
  "id": "PlayList_33337818_3FFD_04A3_41B1_50159429F00A",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid3348E7F1_3FFD_0B65_41CA_35E49C333FA2VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "minWidth": 100,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "playbackBarHeight": 20,
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "shadow": false,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid6B93D8A6_40FB_05EF_41C8_2009767E517E",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipShadowSpread": 0,
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3348E7F1_3FFD_0B65_41CA_35E49C333FA2VideoPlayer)",
    "start": "this.viewer_uid3348E7F1_3FFD_0B65_41CA_35E49C333FA2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33337818_3FFD_04A3_41B1_50159429F00A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_33337818_3FFD_04A3_41B1_50159429F00A, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 "this.Menu_6B8918BA_40FB_05E7_41B5_AE5AADA1CE87",
 {
  "id": "effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF",
  "class": "FadeOutEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_225DC991_2FAA_5DB6_41C5_9170F5257388",
  "class": "FadeOutEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_21084874_2FAA_5B7E_4192_3BBB56EDF229",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_19316399_289D_D724_41C3_5328AD97CF46",
  "class": "FadeOutEffect",
  "easing": "cubic_in",
  "duration": 100
 },
 {
  "id": "effect_325871ED_2F95_BACE_41C2_E393BA0C264F",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ]
 },
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA3788A_40FB_05A7_41A2_A573ECD95E93"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_352C3929_3FFB_04E5_41B0_F8F25C4FE25A",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_333B5803_3FFD_04A5_41C1_C45A301E1807.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
 {
  "id": "effect_30C1C393_2FDB_CDBA_41C3_1FC588B0C473",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA2A88D_40FB_05BD_4176_C724B9189D03"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_350A793B_3FFB_04E5_41A3_2685ED86FE16",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3339D804_3FFD_04A3_41B1_64550A4A5CD4.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA0688F_40FB_05BD_41AD_F582A2E9C894"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3522C92A_3FFB_04E7_41C7_39749CE5F3E8",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33392804_3FFD_04A3_41C3_F3C9A04E032E.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA0C88F_40FB_05BC_41C0_EE989E0997AF"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3522492B_3FFB_04E5_41CA_FEB4C24895BB",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3338F80A_3FFD_04A7_41C9_64A61C7B772C.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_31509B93_2B78_507A_41BE_6FF586B6E809",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA75890_40FB_05A3_41AA_76DCC733DB2D"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3521692C_3FFB_04E3_41C9_419C8AA1BF52",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3338580B_3FFD_04A5_41CF_36A9EC01E639.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_03DF8247_2B58_D0DA_41C0_97250405E525",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA72891_40FB_05A5_41CD_F9CA9D00CAEB"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3520592C_3FFB_04E3_41C9_3834F605CFCA",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3339980B_3FFD_04A4_41B1_C41DEF78B6F6.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA61893_40FB_05A5_4193_D5178DF1169F"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3527692D_3FFB_04FD_41B1_681DB07E284B",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3339080C_3FFD_04A3_41C8_7D354E712E10.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_32F9A509_2B79_D056_41C3_C9791435C04A",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA69894_40FB_05A3_4192_08E2997F6513"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3526292E_3FFB_04FF_41A9_0EBCC5423603",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3339480D_3FFD_04BD_41C9_5FC504D65284.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA57895_40FB_05AD_41BB_6C116C6D1CF0"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3525C92F_3FFB_04FD_41C5_584E42212FC9",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3336A80D_3FFD_04BD_41AE_20195D79E41A.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6BA44896_40FB_05AF_41B4_5BCBDF126154"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3524E92F_3FFB_04FC_41BA_6F55807F249C",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3336F80E_3FFD_04BF_41B5_00510EE72098.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9B1898_40FB_05A3_41A5_61EDA88BF1C1"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_351BD930_3FFB_04E3_41CE_F432980BAC02",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3336580F_3FFD_04BD_41CE_7C289A1A968D.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9BF899_40FB_05A5_41C5_EC0DE2077A4D"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_351AA931_3FFB_04E5_41A3_26AF357DE551",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3337B80F_3FFD_04BD_41C1_34CA1413691D.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9A789A_40FB_05A7_41D0_1873961E1406"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35186931_3FFB_04E5_41B9_FEC909320A8B",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33370810_3FFD_04A3_41B1_1DEA15B99319.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9AD89A_40FB_05A4_41B4_248D8F5C5F3D"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_351F2932_3FFB_04E7_41C5_2DE7472966C6",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33375810_3FFD_04A3_41C4_B50E3A2F20E8.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B99589B_40FB_05A5_4192_BEA5A91B3667"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_351EC933_3FFB_04E5_41CD_958153A63D63",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3334A811_3FFD_04A5_41C1_E2F07CD23742.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B99D89C_40FB_05A3_41C9_BA39A1449F07"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_351DA933_3FFB_04E5_41C7_A270637FFC20",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3334F812_3FFD_04A7_41C9_E1CDFEB034E3.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9F489E_40FB_05DC_41B1_E7C6B183616A"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35135934_3FFB_04E3_41C4_AA13768DAAA7",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33345812_3FFD_04A7_41CF_EE30F9CD7918.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9F189F_40FB_05DD_4184_A1F245EFB488"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35126935_3FFB_04ED_41BF_E56D51404035",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3335A813_3FFD_04A5_41B3_54DF3F8293DD.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9FF8A0_40FB_05E3_41B7_A60F900E5C50"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35112935_3FFB_04ED_41BA_144DFB6ED892",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33350813_3FFD_04A4_41C3_EECC57CA985D.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_195005A5_2B58_D05E_41AE_B430F46606C7",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9E48A0_40FB_05E3_41C0_57AFBA2D9587"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3512C936_3FFB_04EF_41CD_74365DFD4E3C",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33355814_3FFD_04A3_4198_D490FB95E5E4.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9E28A1_40FB_05E5_41C1_55207284394A"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3511F937_3FFB_04ED_41B9_31AE5B32219C",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3332B815_3FFD_04AD_41CA_A5F5B3638024.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_184933F0_2B58_57B6_4188_25FA6469F73E",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9EE8A1_40FB_05E4_41C7_E1A5E8C81EF9"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35102937_3FFB_04ED_41B9_FB5C0FBF4A7A",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3332F815_3FFD_04AD_41CA_2042360826E5.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9D38A3_40FB_05E5_41CC_B6329462F984"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3517D938_3FFB_04E3_41CF_6DAA8B1A2127",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33326816_3FFD_04AF_41C5_1CEA6C483EEF.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9C88A5_40FB_05ED_41C6_81351FF8B94F"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_3516A939_3FFB_04E5_41C4_17876EBD26C4",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3333D816_3FFD_04AF_41CB_F3D58C10C932.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B9368A6_40FB_05EF_41B1_EE5B8F8DD18D"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_35144939_3FFB_04E5_41C1_CC2EE35BE867",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33332817_3FFD_04AD_41B8_8C52819EBD09.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
 {
  "footerHeight": 5,
  "minWidth": 20,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid6B93D8A6_40FB_05EF_41C8_2009767E517E"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_350B493A_3FFB_04E7_41B8_E4D06BAF5390",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "layout": "vertical",
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33337818_3FFD_04A3_41B1_50159429F00A.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0
 },
 "this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6C6DC8F3_40FB_0565_4192_90BAC7DD3238",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 1.44,
     "targetPitch": -2.82,
     "easing": "linear",
     "targetYaw": 130.11,
     "yawSpeed": 1.88
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_30C1C393_2FDB_CDBA_41C3_1FC588B0C473, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, this.effect_30C1C393_2FDB_CDBA_41C3_1FC588B0C473, 'showEffect', false)",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6C65F905_40FB_04AD_41A9_422707566ADA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 64.49,
     "targetPitch": -3.35,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 128.58
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6C571916_40FB_04AC_41CC_E07D55A9890F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 5.37,
     "targetPitch": -0.76,
     "easing": "cubic_in_out",
     "targetYaw": 104.63,
     "yawSpeed": 9.77
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.39,
     "easing": "cubic_in_out",
     "targetYaw": -136.42,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6C429929_40FB_04E5_41C5_1F6D6B7883BD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -6.73,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69D71963_40FB_0765_41C3_02D422707979",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 68.08,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 135.8
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69C91975_40FB_076C_417C_87778CB9F5B5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 13.62,
     "targetPitch": -1.59,
     "easing": "cubic_in_out",
     "targetYaw": 127.27,
     "yawSpeed": 26.35
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.45,
     "easing": "cubic_in_out",
     "targetYaw": -136.59,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.97,
     "easing": "cubic_in_out",
     "targetYaw": -111.75,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "targetYaw": -83.07,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -58.05,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -2.22,
     "easing": "cubic_in_out",
     "targetYaw": -93.27,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69C25988_40FB_07A3_41CF_995933A34DC5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 14.86,
     "targetPitch": -3.35,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 28.84
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69BB4999_40FB_07A4_41CA_98AFB9E20666",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69B239AB_40FB_07E5_41C9_7CD5FC069D4F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -10.63,
     "easing": "cubic_in_out",
     "targetYaw": 35.23,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.04,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -29.16,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69AE69BC_40FB_07DC_41A0_B71B3162FFCE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 53.07,
     "targetPitch": -6.73,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 105.62
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_69A4A9CD_40FB_07BD_417D_814132EE4DD3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.37,
     "targetPitch": -0.76,
     "easing": "cubic_in_out",
     "targetYaw": 104.63,
     "yawSpeed": 17.82
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.39,
     "easing": "cubic_in_out",
     "targetYaw": -136.42,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_699719DF_40FB_075D_41C4_49C25472ED7F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 3.96,
     "targetPitch": -14.17,
     "easing": "cubic_in_out",
     "targetYaw": -67.48,
     "yawSpeed": 6.96
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -30.29,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.1,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.42,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, null, null, false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, null, null, false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, null, null, false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, null, null, false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.75,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_698CC9F1_40FB_0764_41CE_1E259E296D5F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 3.58,
     "targetPitch": -1.59,
     "easing": "cubic_in_out",
     "targetYaw": 127.27,
     "yawSpeed": 6.18
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.45,
     "easing": "cubic_in_out",
     "targetYaw": -136.59,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.97,
     "easing": "cubic_in_out",
     "targetYaw": -111.75,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "targetYaw": -83.07,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -58.05,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -2.22,
     "easing": "cubic_in_out",
     "targetYaw": -93.27,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6A7F2A02_40FB_04A7_41B7_1A8F86589177",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -6.12,
     "easing": "cubic_in_out",
     "targetYaw": 14.65,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "class": "SlideInEffect",
  "easing": "cubic_out",
  "duration": 1000,
  "from": "left"
 },
 {
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8C0876_400D_056C_4197_4D21DD837174",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 {
  "id": "effect_6A70AA0B_40FB_04A4_41BA_655C6B9DAAD9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 {
  "id": "effect_6A774A0C_40FB_04A3_41BB_B07C34975C8B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_6A775A0C_40FB_04A3_41CC_7FF5B4F59C4A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_6A770A0C_40FB_04BC_4178_D754D57B9E14",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 {
  "id": "effect_6A771A0D_40FB_04BD_41CB_76BEDCBCCB93",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8D4879_400D_0565_41B8_FE8D57986FC7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7",
 {
  "id": "effect_6A772A0D_40FB_04BD_41CA_478835F16946",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_6A77CA0E_40FB_04BF_41C7_D3374A9156F7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_6A77DA0E_40FB_04BF_41C9_672458444424",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_6A77EA0E_40FB_04BF_41BD_7244125608A4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_6A779A0F_40FB_04BD_41C5_6FD4BBB29BC4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A764A0F_40FB_04BD_4182_D93165F05D08",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A765A0F_40FB_04BC_4177_51D91CBB8063",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A767A10_40FB_04A3_41B6_614E4D708781",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A761A10_40FB_04A3_41BB_5F026683BB0C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A70BA11_40FB_04A5_41C2_D9C2756026FF",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 {
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_6A774A11_40FB_04A5_41C4_252342DBBF1D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A777A11_40FB_04A5_41BE_8E8BBBD4D9D2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A771A12_40FB_04A7_41A6_AF9ABFC5A6F8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A772A12_40FB_04A7_41A2_B52EC6BAD893",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_6A77CA12_40FB_04A7_415A_7A8F28EDFF14",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A77EA13_40FB_04A5_41B4_645F1132AE73",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "id": "effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A778A13_40FB_04A5_4171_6565B6C0D193",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
 {
  "id": "effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A77AA14_40FB_04A3_41B8_55AA9DEA61BB",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
 {
  "id": "effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A77BA14_40FB_04A3_41BB_12BA3FB5141F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
 {
  "id": "effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A765A14_40FB_04A3_41B6_009BB4D1821D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
 {
  "id": "effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A767A15_40FB_04AD_41CB_8E9C3FD22B03",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
 {
  "id": "effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A760A15_40FB_04AD_41C8_4AE3FFC9F740",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
 {
  "id": "effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A761A15_40FB_04AD_41CB_B8E8FC75F807",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
 {
  "id": "effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A763A16_40FB_04AF_41B9_CE22884862B0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
 {
  "id": "effect_309931C2_2B3A_E700_41BB_D77E5464C333",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A76CA16_40FB_04AF_41C1_8EF34BF5EE02",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309931C2_2B3A_E700_41BB_D77E5464C333",
 {
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "id": "effect_6A76DA16_40FB_04AF_41C1_AF22DB52D646",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A76FA17_40FB_04AD_4196_01DD5E5B090E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A768A17_40FB_04AD_41C2_6A0766CEB968",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A76AA17_40FB_04AC_41A3_E227C58F879C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "id": "effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A754A18_40FB_04A3_41CC_46F291AE8FED",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
 {
  "id": "effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_31459F67_2FAE_D69A_4164_37DF78EF38D3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A750A18_40FB_04A3_4170_1F13D2DAC8CE",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A751A19_40FB_04A5_41C1_DA006B32802D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A753A19_40FB_04A5_41AE_26F7DCFE1388",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_6A75DA19_40FB_04A5_41C9_2E69A03D0638",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_6A765A1A_40FB_04A7_41C3_4C3DA9A7201F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_6A766A1A_40FB_04A7_41AF_2FDFE6649E8C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "id": "effect_6A761A1A_40FB_04A4_41CE_8E2FD2136621",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A762A1B_40FB_04A5_41C3_E707A3F90456",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
 {
  "id": "effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A763A1B_40FB_04A5_419F_778A86CF569B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
 {
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "id": "effect_6A76DA1C_40FB_04A3_41CC_A40B3E7EE960",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
 {
  "id": "effect_6A76EA1C_40FB_04A3_41C2_F848831E8CD8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "id": "effect_6A768A1C_40FB_04A3_41CF_F8B87D280F9E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A76BA1D_40FB_04DD_41B6_68995C409C4B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
 {
  "id": "effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A754A1D_40FB_04DD_4193_6255F7F606E0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
 {
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "id": "effect_6A755A1E_40FB_04DF_41C1_8D4A7A1CE583",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
 {
  "id": "effect_6A757A1E_40FB_04DF_41CB_831B4E1F8FB9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A751A1E_40FB_04DF_41AA_AD17864A657B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
 {
  "id": "effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A753A1F_40FB_04DD_41B5_B4479EAE6466",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
 {
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "id": "effect_6A75CA1F_40FB_04DD_41C5_9D71692A1E7E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
 {
  "id": "effect_6A75EA1F_40FB_04DC_41CE_A9C828C57C98",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A758A20_40FB_04E3_41A9_F0202AE146F6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
 {
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "id": "effect_6A75AA20_40FB_04E3_41CE_6D68CBEA197A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_63916A56_2B78_F0FA_41B5_906759C4A755",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63916A56_2B78_F0FA_41B5_906759C4A755",
 {
  "id": "effect_6A744A21_40FB_04E5_41A0_5704118FEDE4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6A747A21_40FB_04E5_41CC_F8B693F07619",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
 {
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "id": "effect_6A742A22_40FB_04E7_4171_6B12ED549DB9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
 {
  "id": "effect_6A74CA22_40FB_04E7_41A8_A67411568C07",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
 "this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 {
  "id": "effect_6A74EA22_40FB_04E7_41C8_338C149F7518",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 {
  "id": "effect_6A756A23_40FB_04E5_4197_826EAAAA5785",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_6A750A23_40FB_04E5_41B8_57AFEA1D0ACB",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_6A751A23_40FB_04E4_41B7_5C9BE89D87BC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 {
  "id": "effect_6A752A24_40FB_04E3_419A_F8BB80EB9032",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7",
 "this.effect_5C8D4879_400D_0565_41B8_FE8D57986FC7",
 {
  "id": "effect_6A75CA24_40FB_04E3_41CF_2182F08CD792",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_6A75DA25_40FB_04ED_41C6_2E1A62AC1208",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_6A75EA25_40FB_04ED_41CF_54E5079061E5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_6A758A25_40FB_04ED_41D0_05FC69B04A7C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_6A759A26_40FB_04EF_41A8_A4E17A18D954",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
 "this.effect_269A2071_2B29_F0B6_41B4_001C61C97291",
 "this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
 "this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
 "this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_6A744A26_40FB_04EF_41C8_1BB09641D9A2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_6A745A26_40FB_04EF_41AD_47832CEEDFF4",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_6A747A27_40FB_04ED_41C1_177678D32429",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_6A742A27_40FB_04ED_41BB_D70F91EC9E80",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 "this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
 "this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 {
  "id": "effect_6A74DA28_40FB_04E3_41C1_92ADC5CBCA78",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_335FA9BA_2FFA_DDEA_4187_18A4F27C7628",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_6A748A28_40FB_04E3_41B2_21BF22388E24",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
 "this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_6A749A29_40FB_04E5_4180_0745D74BD7D6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_6A74AA29_40FB_04E5_41C4_ABD7E29DAB0B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_6A6B4A29_40FB_04E5_41CE_1AC64DF4BE0B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_6A6B5A2A_40FB_04E7_41A6_2A8809214043",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_6A6B7A2A_40FB_04E7_41CE_4C2A783C85B8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_6A6B2A2B_40FB_04E5_41A8_79D205FF3B52",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_6A6BCA2B_40FB_04E5_41B6_476082B09C0F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg",
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3"
  },
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "autoplay": true
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37.mp4"
  },
  "label": "03 Ramprasad",
  "width": 1440,
  "loop": false,
  "id": "video_334B0411_2B57_B076_41AC_7C1A8BDC1C37",
  "height": 1080,
  "thumbnailUrl": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02.mp4"
  },
  "label": "05 Nikitha",
  "width": 1440,
  "loop": false,
  "id": "video_3EC6271F_2B57_B06A_4179_5A8542744F02",
  "height": 1080,
  "thumbnailUrl": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02_t.jpg",
  "scaleMode": "fit_inside"
 }
], "children": [
 {
  "progressLeft": 10,
  "minWidth": 100,
  "progressBackgroundOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "toolTipShadowColor": "#333333",
  "playbackBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBorderSize": 2,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#0066B3",
   "#6BA13C"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 1,
  "progressHeight": 20,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColor": [
   "#0066B3",
   "#71A348"
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "paddingTop": 0,
  "playbackBarHeight": 20,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderSize": 0,
  "height": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "shadow": false,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "paddingBottom": 0,
  "progressBorderSize": 2,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "progressRight": 10,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarLeft": 0,
  "top": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "horizontal",
  "toolTipOpacity": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipPaddingRight": 6,
  "transitionMode": "blending",
  "progressBarBorderColor": "#000000",
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "toolTipShadowSpread": 0,
  "toolTipFontWeight": "normal",
  "playbackBarBorderColor": "#AAAAAA",
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 4,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "backgroundOpacity": 0.75,
  "bottom": "0%",
  "minWidth": 150,
  "shadowVerticalLength": 0,
  "shadowBlurRadius": 6,
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "scrollBarMargin": 2,
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "shadowHorizontalLength": 7,
  "layout": "vertical",
  "contentOpaque": true,
  "horizontalAlign": "center",
  "class": "Container",
  "backgroundColorDirection": "horizontal",
  "paddingLeft": 0,
  "shadowSpread": 1,
  "children": [
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "id": "Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "contentOpaque": false,
    "horizontalAlign": "left",
    "class": "Container",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "width": "100%",
    "verticalAlign": "top",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "height": "1.983%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "minHeight": 1
   },
   {
    "backgroundOpacity": 0,
    "minWidth": 3,
    "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
    "horizontalAlign": "right",
    "paddingLeft": 0,
    "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
    "class": "Image",
    "maxWidth": 512,
    "paddingTop": 0,
    "maxHeight": 512,
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": 31,
    "width": "78.116%",
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
    "paddingBottom": 0,
    "minHeight": 3
   },
   {
    "backgroundOpacity": 0,
    "minWidth": 1,
    "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "maxWidth": 850,
    "paddingTop": 0,
    "maxHeight": 850,
    "verticalAlign": "middle",
    "borderSize": 0,
    "width": "100%",
    "shadow": false,
    "height": "30%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
    "paddingBottom": 0,
    "minHeight": 1
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "minWidth": 5,
      "id": "Image_227442D1_2F53_0813_41B3_7271F7D70452",
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "maxWidth": 1705,
      "paddingTop": 0,
      "maxHeight": 600,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "100%",
      "shadow": false,
      "height": "306.122%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_227442D1_2F53_0813_41B3_7271F7D70452.png",
      "paddingBottom": 0,
      "minHeight": 5
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "width": "100%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "height": "16.157%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "minHeight": 1
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "id": "Container_063F3017_2894_D12C_41C0_A30FBA33D2C0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "width": "16.667%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "height": "4.215%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "minHeight": 1
   },
   {
    "backgroundOpacity": 0,
    "minWidth": 20,
    "id": "Image_3E3159F0_2F73_8AD6_41B4_20FEA96870FA",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_21F9CA29_2FA6_5E96_41B3_1771C6524AAF, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_21B3FED6_2FA9_F7BA_41C3_3D7F3AAFD9CF, 'hideEffect', false)",
    "class": "Image",
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "width": "80%",
    "shadow": false,
    "height": "30%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_3E3159F0_2F73_8AD6_41B4_20FEA96870FA.png",
    "paddingBottom": 0,
    "minHeight": 20
   },
   {
    "backgroundOpacity": 0,
    "minWidth": 20,
    "id": "Image_3E4240AA_2F72_794A_41C3_4F30D0EF2B1A",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_226DCA75_2FAA_DF79_41AD_718D2ED4C090, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_225DC991_2FAA_5DB6_41C5_9170F5257388, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_225DC991_2FAA_5DB6_41C5_9170F5257388, 'hideEffect', false)",
    "class": "Image",
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "width": "80%",
    "shadow": false,
    "height": "30%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_3E4240AA_2F72_794A_41C3_4F30D0EF2B1A.png",
    "paddingBottom": 0,
    "minHeight": 20
   },
   {
    "backgroundOpacity": 0,
    "minWidth": 20,
    "id": "Image_3E829ED5_2F72_86DE_41C1_E60DBD447748",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, this.effect_21084874_2FAA_5B7E_4192_3BBB56EDF229, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_3CB3C8BF_2F95_894A_41C1_99FEF24DC78D, 'hideEffect', false)",
    "class": "Image",
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "width": "80%",
    "shadow": false,
    "height": "30%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_3E829ED5_2F72_86DE_41C1_E60DBD447748.png",
    "paddingBottom": 0,
    "minHeight": 20
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "minWidth": 5,
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 5,
    "children": [
     {
      "backgroundOpacity": 0,
      "minWidth": 20,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "class": "Image",
      "maxWidth": 512,
      "paddingTop": 0,
      "maxHeight": 512,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderSize": 0,
      "width": "15%",
      "shadow": false,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "paddingBottom": 0,
      "minHeight": 20
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 20,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "class": "Image",
      "maxWidth": 512,
      "paddingTop": 0,
      "maxHeight": 512,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderSize": 0,
      "width": "15%",
      "shadow": false,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "paddingBottom": 0,
      "minHeight": 20
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 20,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "class": "Image",
      "maxWidth": 512,
      "paddingTop": 0,
      "maxHeight": 512,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderSize": 0,
      "width": "15%",
      "shadow": false,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "paddingBottom": 0,
      "minHeight": 20
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 84,
    "width": "100%",
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "height": "50%",
    "borderRadius": 0,
    "paddingRight": 5,
    "gap": 35,
    "paddingBottom": 30,
    "minHeight": 5
   }
  ],
  "shadowOpacity": 0.4,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "verticalAlign": "top",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "shadow": true,
  "borderRadius": 0,
  "shadowColor": "#000000",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "minHeight": 150,
  "left": "0%",
  "right": "84.93%",
  "scrollBarOpacity": 0.5,
  "top": "0%"
 },
 {
  "backgroundOpacity": 0,
  "minWidth": 1,
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "visible": false,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_19316399_289D_D724_41C3_5328AD97CF46, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false)",
  "class": "Image",
  "maxWidth": 512,
  "paddingTop": 0,
  "maxHeight": 512,
  "verticalAlign": "middle",
  "borderSize": 0,
  "width": "3.21%",
  "shadow": false,
  "height": "3.802%",
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "paddingBottom": 0,
  "minHeight": 1,
  "left": "1.33%",
  "top": "3.51%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "0%",
  "minWidth": 500,
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "contentOpaque": false,
  "horizontalAlign": "left",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundOpacity": 0.4,
    "bottom": "6.04%",
    "minWidth": 1,
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#006CB5",
     "#71A348"
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "layout": "vertical",
    "contentOpaque": false,
    "visible": false,
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "children": [
     {
      "backgroundOpacity": 1,
      "minWidth": 1,
      "id": "Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F",
      "scrollBarMargin": 2,
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "layout": "horizontal",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "backgroundColorDirection": "horizontal",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "id": "Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "layout": "absolute",
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "minWidth": 1,
          "id": "Image_33470F48_2F93_8736_41C7_C471F2C7FF7C",
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "maxWidth": 1753,
          "paddingTop": 0,
          "maxHeight": 133,
          "verticalAlign": "middle",
          "borderSize": 0,
          "width": "100%",
          "shadow": false,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_33470F48_2F93_8736_41C7_C471F2C7FF7C.png",
          "paddingBottom": 0,
          "minHeight": 1,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "width": "84.581%",
        "verticalAlign": "top",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "minHeight": 1
       },
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "id": "Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "layout": "absolute",
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "minWidth": 1,
          "id": "Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, this.effect_325871ED_2F95_BACE_41C2_E393BA0C264F, 'hideEffect', false)",
          "class": "Image",
          "maxWidth": 512,
          "paddingTop": 0,
          "maxHeight": 512,
          "verticalAlign": "middle",
          "borderSize": 0,
          "width": "20%",
          "shadow": false,
          "height": "65.447%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_329EB816_2FB2_895A_41B1_8E0A75ABCBFE.png",
          "paddingBottom": 0,
          "minHeight": 1,
          "right": "11%",
          "top": "15.37%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "width": "14.684%",
        "verticalAlign": "top",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "minHeight": 1
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "height": "12.627%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0,
      "minHeight": 1,
      "scrollBarOpacity": 0.5
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 1,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "maxWidth": 1385,
      "paddingTop": 0,
      "maxHeight": 866,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "100%",
      "shadow": false,
      "height": "87.294%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "paddingBottom": 0,
      "minHeight": 1
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 1,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "maxWidth": 1385,
      "paddingTop": 0,
      "maxHeight": 866,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "100%",
      "shadow": false,
      "height": "87.324%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "paddingBottom": 0,
      "minHeight": 1
     },
     {
      "minWidth": 5,
      "itemBackgroundColor": [],
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "itemPaddingLeft": 3,
      "scrollBarWidth": 10,
      "rollOverItemLabelFontColor": "#F06436",
      "itemLabelHorizontalAlign": "center",
      "scrollBarColor": "#FFFFFF",
      "itemBackgroundColorRatios": [],
      "itemThumbnailShadowOpacity": 0.54,
      "rollOverItemLabelFontWeight": "bold",
      "itemHorizontalAlign": "center",
      "paddingTop": 10,
      "itemLabelTextDecoration": "none",
      "playList": "this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
      "borderSize": 0,
      "height": "87.367%",
      "itemLabelFontColor": "#FFFFFF",
      "shadow": false,
      "paddingRight": 20,
      "width": "100%",
      "gap": 10,
      "itemThumbnailShadowHorizontalLength": 3,
      "paddingBottom": 10,
      "itemBackgroundOpacity": 0,
      "selectedItemLabelFontColor": "#FFCC00",
      "itemLabelFontWeight": "bold",
      "rollOverItemBackgroundOpacity": 0,
      "itemThumbnailScaleMode": "fit_outside",
      "itemLabelFontSize": 30,
      "itemOpacity": 1,
      "scrollBarMargin": 2,
      "backgroundOpacity": 0.78,
      "itemLabelGap": 0,
      "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B",
      "itemBackgroundColorDirection": "vertical",
      "itemThumbnailShadowVerticalLength": 3,
      "scrollBarVisible": "rollOver",
      "itemPaddingRight": 3,
      "selectedItemLabelFontWeight": "bold",
      "itemThumbnailBorderRadius": 100,
      "itemThumbnailShadowSpread": 1,
      "itemThumbnailWidth": 200,
      "layout": "vertical",
      "horizontalAlign": "left",
      "class": "ThumbnailList",
      "backgroundColorDirection": "horizontal",
      "paddingLeft": 20,
      "itemThumbnailHeight": 200,
      "itemLabelPosition": "right",
      "itemThumbnailShadowBlurRadius": 8,
      "itemThumbnailShadowColor": "#000000",
      "itemPaddingBottom": 3,
      "itemPaddingTop": 3,
      "itemLabelFontStyle": "normal",
      "itemThumbnailOpacity": 1,
      "itemThumbnailShadow": true,
      "verticalAlign": "top",
      "borderRadius": 5,
      "backgroundColorRatios": [
       0,
       1
      ],
      "itemMode": "normal",
      "scrollBarOpacity": 0.5,
      "itemVerticalAlign": "middle",
      "itemLabelFontFamily": "Arial",
      "minHeight": 5,
      "itemBorderRadius": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "verticalAlign": "top",
    "borderSize": 0,
    "backgroundColorRatios": [
     0.02,
     1
    ],
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "minHeight": 1,
    "left": "14.8%",
    "right": "15.2%",
    "scrollBarOpacity": 0.5,
    "top": "23.87%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "minWidth": 1,
    "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
    "paddingBottom": 0,
    "minHeight": 1,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "minWidth": 1,
    "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
    "paddingBottom": 0,
    "minHeight": 1,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "minWidth": 1,
    "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
    "paddingBottom": 0,
    "minHeight": 1,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "minWidth": 1,
    "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "maxWidth": 1705,
    "paddingTop": 0,
    "maxHeight": 600,
    "verticalAlign": "middle",
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
    "paddingBottom": 0,
    "minHeight": 1,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "2%",
    "minWidth": 10,
    "id": "Container_619590BA_4005_05E7_41C3_8B4621024A56",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "id": "Container_647D2A27_403F_04ED_41B8_62A899DFCCD0",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       "this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B"
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "width": "42.607%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0,
      "minHeight": 1
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "id": "Container_64F00B6B_403F_1B64_41C6_2E5278BB284E",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "transparencyActive": true,
        "backgroundOpacity": 0,
        "minWidth": 50,
        "id": "IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
        "mode": "toggle",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "class": "IconButton",
        "maxWidth": 75,
        "paddingTop": 0,
        "maxHeight": 100,
        "verticalAlign": "middle",
        "cursor": "hand",
        "borderSize": 0,
        "width": "62.18%",
        "shadow": false,
        "iconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.png",
        "borderRadius": 0,
        "paddingRight": 0,
        "height": "87.46%",
        "pressedIconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356_pressed.png",
        "paddingBottom": 0,
        "minHeight": 50
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "width": "46.498%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0,
      "minHeight": 1
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "width": "13.207%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "height": "9.128%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "minHeight": 10,
    "right": "5%"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "paddingTop": 0,
  "width": "84.956%",
  "verticalAlign": "top",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "height": "99.917%",
  "borderRadius": 0,
  "paddingRight": 0,
  "gap": 10,
  "paddingBottom": 0,
  "minHeight": 500,
  "right": "0%"
 },
 {
  "backgroundOpacity": 0,
  "minWidth": 1,
  "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
  "visible": false,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "class": "Image",
  "maxWidth": 850,
  "paddingTop": 0,
  "maxHeight": 850,
  "verticalAlign": "middle",
  "borderSize": 0,
  "width": "7.511%",
  "shadow": false,
  "height": "13.636%",
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
  "paddingBottom": 0,
  "minHeight": 1,
  "left": "1.81%",
  "top": "3.55%"
 },
 {
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "minWidth": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "visible": false,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "minHeight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 1,
  "bottom": 0,
  "minWidth": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "visible": false,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "minHeight": 0,
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 0.3,
  "minWidth": 0,
  "shadowBlurRadius": 6,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "textDecoration": "none",
  "mode": "push",
  "iconBeforeLabel": true,
  "iconHeight": 20,
  "visible": false,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "layout": "horizontal",
  "shadowSpread": 1,
  "fontColor": "#FFFFFF",
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "cursor": "hand",
  "paddingTop": 5,
  "borderColor": "#000000",
  "verticalAlign": "middle",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 5,
  "pressedIconColor": "#888888",
  "rollOverIconColor": "#666666",
  "fontStyle": "normal",
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "gap": 5,
  "fontSize": 12,
  "minHeight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "right": 10,
  "iconWidth": 20,
  "label": "",
  "top": 10
 }
], 
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "minWidth": 20,
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "layout": "absolute",
 "contentOpaque": false,
 "buttonToggleMute": "this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "verticalAlign": "top",
 "borderSize": 0,
 "shadow": false,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "gap": 10,
 "paddingBottom": 0,
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": false
})