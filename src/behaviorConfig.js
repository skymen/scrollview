// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "skymen_scrollview",
  name: "scrollview",
  version: "1.0.0.0",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Description",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  // githubUrl: "https://github.com/skymen/XXXX", // displays latest release version in auto-generated docs
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: true,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
    {
      type: "float",
      id: "max-speed",
      options: {
        initialValue: 1000,
        minValue: 0,
      },
      name: "Max speed",
      desc: "Max speed",
    },
    {
      type: "float",
      id: "deceleration",
      options: {
        initialValue: 1500,
        minValue: 0,
      },
      name: "Deceleration",
      desc: "Deceleration",
    },
    {
      type: "float",
      id: "overscroll-pushback",
      options: {
        initialValue: 5000,
        minValue: 0,
        maxValue: 1,
      },
      name: "Overscroll push back",
      desc: "Overscroll push back",
    },
    {
      type: "float",
      id: "overscroll-deceleration-ratio",
      options: {
        initialValue: 10,
        minValue: 0,
        maxValue: 1,
      },
      name: "Overscroll deceleration ratio",
      desc: "Overscroll deceleration ratio",
    },
    {
      type: "combo",
      id: "scroll-direction",
      options: {
        initialValue: "vertical",
        items: [
          { vertical: "vertical" },
          { horizontal: "horizontal" },
          { both: "both" },
        ],
      },
      name: "Scroll direction",
      desc: "Scroll direction",
    },
    {
      type: "combo",
      id: "align-horizontal",
      options: {
        initialValue: "left",
        items: [{ left: "left" }, { center: "center" }, { right: "right" }],
      },
      name: "Horizontal align",
      desc: "Horizontal align",
    },
    {
      type: "combo",
      id: "align-vertical",
      options: {
        initialValue: "top",
        items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
      },
      name: "Vertical align",
      desc: "Vertical align",
    },
    {
      type: "float",
      id: "margin-left",
      options: {
        initialValue: 0,
        minValue: 0,
      },
      name: "Margin left",
      desc: "Margin left",
    },
    {
      type: "float",
      id: "margin-top",
      options: {
        initialValue: 0,
        minValue: 0,
      },
      name: "Margin top",
      desc: "Margin top",
    },
    {
      type: "float",
      id: "margin-right",
      options: {
        initialValue: 0,
        minValue: 0,
      },
      name: "Margin right",
      desc: "Margin right",
    },
    {
      type: "float",
      id: "margin-bottom",
      options: {
        initialValue: 0,
        minValue: 0,
      },
      name: "Margin bottom",
      desc: "Margin bottom",
    },
    {
      type: "float",
      id: "overscroll",
      options: {
        initialValue: 20,
        minValue: 0,
      },
      name: "Max Overscroll",
      desc: "How much overscroll is allowed",
    },
    {
      type: "check",
      id: "show-overscroll",
      options: {
        initialValue: true,
      },
      name: "Show overscroll",
      desc: "Show overscroll",
    },
    {
      type: "check",
      id: "pick-first-child-as-instance",
      options: {
        initialValue: true,
      },
      name: "Pick first child as instance",
      desc: "Pick first child as instance",
    },
    {
      type: "check",
      id: "enable-snapping",
      options: {
        initialValue: false,
      },
      name: "Enable snapping",
      desc: "Enable snapping",
    },
    {
      type: "float",
      id: "snap-speed-threshold",
      options: {
        initialValue: 100,
        minValue: 0,
      },
      name: "Snap speed threshold",
      desc: "Snap speed threshold",
    },
    {
      type: "float",
      id: "snap-distance-threshold",
      options: {
        initialValue: 100,
        minValue: 0,
      },
      name: "Snap distance threshold",
      desc: "Snap distance threshold",
    },
    {
      type: "float",
      id: "snap-speed",
      options: {
        initialValue: 1000,
        minValue: 0,
      },
      name: "Snap speed",
      desc: "Snap speed",
    },
    {
      type: "float",
      id: "nb-columns",
      options: {
        initialValue: 1,
      },
      name: "Nb columns",
      desc: "Nb columns",
    },
    {
      type: "float",
      id: "nb-rows",
      options: {
        initialValue: 1,
      },
      name: "Nb rows",
      desc: "Nb rows",
    },
    {
      type: "check",
      id: "enable",
      options: {
        initialValue: true,
      },
      name: "Enabled",
      desc: "Enabled",
    },
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "General",
    properties: "Properties",
  },
  Acts: {
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
    SetScrollXY: {
      category: "general",
      forward: "_SetScrollXY",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X",
          type: "number",
          value: 0,
        },
        {
          id: "y",
          name: "Y",
          desc: "Y",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set scroll",
      displayText: "{my}: Set scroll to ([i]{0}[/i], [i]{1}[/i])",
      description: "Set scroll",
    },
    SetScrollX: {
      category: "general",
      forward: "_SetScrollX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set scroll X",
      displayText: "{my}: Set scroll X to [i]{0}[/i]",
      description: "Set scroll X",
    },
    SetScrollY: {
      category: "general",
      forward: "_SetScrollY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "y",
          name: "Y",
          desc: "Y",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set scroll Y",
      displayText: "{my}: Set scroll Y to [i]{0}[/i]",
      description: "Set scroll Y",
    },
    SetProgressXY: {
      category: "general",
      forward: "_SetProgressXY",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X from 0 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "y",
          name: "Y",
          desc: "Y from 0 to 1",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set progress",
      displayText: "{my}: Set scroll progress to ([i]{0}[/i], [i]{1}[/i])",
      description: "Set progress",
    },
    SetProgressX: {
      category: "general",
      forward: "_SetProgressX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X from 0 to 1",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set progress X",
      displayText: "{my}: Set scroll progress X to [i]{0}[/i]",
      description: "Set progress X",
    },
    SetProgressY: {
      category: "general",
      forward: "_SetProgressY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "y",
          name: "Y",
          desc: "Y from 0 to 1",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set progress Y",
      displayText: "{my}: Set scroll progress Y to [i]{0}[/i]",
      description: "Set progress Y",
    },
    SetInstance: {
      category: "general",
      forward: "_SetInstance",
      autoScriptInterface: false,
      highlight: false,
      params: [
        {
          id: "instance",
          name: "Instance",
          desc: "Instance",
          type: "object",
          allowedPluginIds: ["<world>"],
        },
      ],
      listName: "Set instance",
      displayText: "{my}: Set instance to [i]{0}[/i]",
      description: "Set instance",
    },
    SetVectorX: {
      category: "properties",
      forward: "_SetVectorX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set vector X",
      displayText: "{my}: Set vector X to [i]{0}[/i]",
      description: "Set vector X",
    },
    SetVectorY: {
      category: "properties",
      forward: "_SetVectorY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "y",
          name: "Y",
          desc: "Y",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set vector Y",
      displayText: "{my}: Set vector Y to [i]{0}[/i]",
      description: "Set vector Y",
    },
    SetVectorXY: {
      category: "properties",
      forward: "_SetVectorXY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X",
          type: "number",
          value: 0,
        },
        {
          id: "y",
          name: "Y",
          desc: "Y",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set vector",
      displayText: "{my}: Set vector to ([i]{0}[/i], [i]{1}[/i])",
      description: "Set vector",
    },
    SetMaxSpeed: {
      category: "properties",
      forward: "_SetMaxSpeed",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "maxSpeed",
          name: "Max speed",
          desc: "Max speed",
          type: "number",
          value: 100,
        },
      ],
      listName: "Set max speed",
      displayText: "{my}: Set max speed to [i]{0}[/i]",
      description: "Set max speed",
    },
    SetDeceleration: {
      category: "properties",
      forward: "_SetDeceleration",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "deceleration",
          name: "Deceleration",
          desc: "Deceleration",
          type: "number",
          value: 5000,
        },
      ],
      listName: "Set deceleration",
      displayText: "{my}: Set deceleration to [i]{0}[/i]",
      description: "Set deceleration",
    },
    SetOverScrollPushBack: {
      category: "properties",
      forward: "_SetOverScrollPushBack",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "pushBack",
          name: "Push back",
          desc: "Push back",
          type: "number",
          value: 500,
        },
      ],
      listName: "Set overscroll push back",
      displayText: "{my}: Set overscroll push back to [i]{0}[/i]",
      description: "Set overscroll push back",
    },
    SetSnapSpeedThreshold: {
      category: "properties",
      forward: "_SetSnapSpeedThreshold",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "speedThreshold",
          name: "Speed threshold",
          desc: "Speed threshold",
          type: "number",
          value: 100,
        },
      ],
      listName: "Set snap speed threshold",
      displayText: "{my}: Set snap speed threshold to [i]{0}[/i]",
      description: "Set snap speed threshold",
    },
    SetSnapDistanceThreshold: {
      category: "properties",
      forward: "_SetSnapDistanceThreshold",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "distanceThreshold",
          name: "Distance threshold",
          desc: "Distance threshold",
          type: "number",
          value: 100,
        },
      ],
      listName: "Set snap distance threshold",
      displayText: "{my}: Set snap distance threshold to [i]{0}[/i]",
      description: "Set snap distance threshold",
    },
    SetSnapSpeed: {
      category: "properties",
      forward: "_SetSnapSpeed",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "snapSpeed",
          name: "Snap speed",
          desc: "Snap speed",
          type: "number",
          value: 1000,
        },
      ],
      listName: "Set snap speed",
      displayText: "{my}: Set snap speed to [i]{0}[/i]",
      description: "Set snap speed",
    },
    SetNbColumns: {
      category: "properties",
      forward: "_SetNbColumns",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "nbColumns",
          name: "Nb columns",
          desc: "Nb columns",
          type: "number",
          value: 1,
        },
      ],
      listName: "Set nb columns",
      displayText: "{my}: Set nb columns to [i]{0}[/i]",
      description: "Set nb columns",
    },
    SetNbRows: {
      category: "properties",
      forward: "_SetNbRows",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "nbRows",
          name: "Nb rows",
          desc: "Nb rows",
          type: "number",
          value: 1,
        },
      ],
      listName: "Set nb rows",
      displayText: "{my}: Set nb rows to [i]{0}[/i]",
      description: "Set nb rows",
    },
    SetGrid: {
      category: "properties",
      forward: "_SetGrid",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "nbColumns",
          name: "Nb columns",
          desc: "Nb columns",
          type: "number",
          value: 1,
        },
        {
          id: "nbRows",
          name: "Nb rows",
          desc: "Nb rows",
          type: "number",
          value: 1,
        },
      ],
      listName: "Set grid",
      displayText: "{my}: Set grid to ([i]{0}[/i], [i]{1}[/i])",
      description: "Set grid",
    },
    SetEnabled: {
      category: "general",
      forward: "_SetEnabled",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "enabled",
          name: "Enabled",
          desc: "Enabled",
          type: "boolean",
          value: true,
        },
      ],
      listName: "Set enabled",
      displayText: "{my}: Set enabled to [i]{0}[/i]",
      description: "Set enabled",
    },
    SetSnappingEnabled: {
      category: "general",
      forward: "_SetSnappingEnabled",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "enabled",
          name: "Enabled",
          desc: "Enabled",
          type: "boolean",
          value: true,
        },
      ],
      listName: "Set snapping enabled",
      displayText: "{my}: Set snapping enabled to [i]{0}[/i]",
      description: "Set snapping enabled",
    },
    SetScrollDirection: {
      category: "general",
      forward: "_SetScrollDirection",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "direction",
          name: "Direction",
          desc: "Direction",
          type: "combo",
          items: [
            { vertical: "vertical" },
            { horizontal: "horizontal" },
            { both: "both" },
          ],
          value: "vertical",
        },
      ],
      listName: "Set scroll direction",
      displayText: "{my}: Set scroll direction to [i]{0}[/i]",
      description: "Set scroll direction",
    },
    SetAlignHorizontal: {
      category: "general",
      forward: "_SetAlignHorizontal",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "align",
          name: "Align",
          desc: "Align",
          type: "combo",
          items: [{ left: "left" }, { center: "center" }, { right: "right" }],
          value: "left",
        },
      ],
      listName: "Set horizontal align",
      displayText: "{my}: Set horizontal align to [i]{0}[/i]",
      description: "Set horizontal align",
    },
    SetAlignVertical: {
      category: "general",
      forward: "_SetAlignVertical",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "align",
          name: "Align",
          desc: "Align",
          type: "combo",
          items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
          value: "top",
        },
      ],
      listName: "Set vertical align",
      displayText: "{my}: Set vertical align to [i]{0}[/i]",
      description: "Set vertical align",
    },
    SetAlign: {
      category: "general",
      forward: "_SetAlign",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "alignHorizontal",
          name: "Horizontal align",
          desc: "Horizontal align",
          type: "combo",
          items: [{ left: "left" }, { center: "center" }, { right: "right" }],
          value: "left",
        },
        {
          id: "alignVertical",
          name: "Vertical align",
          desc: "Vertical align",
          type: "combo",
          items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
          value: "top",
        },
      ],
      listName: "Set align",
      displayText: "{my}: Set align to [i]{0}[/i], [i]{1}[/i]",
      description: "Set align",
    },
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
    IsEnabled: {
      category: "general",
      forward: "_IsEnabled",
      autoScriptInterface: true,
      highlight: false,
      listName: "Is enabled",
      displayText: "{my}: Is enabled",
      description: "Is enabled",
    },
    IsSnappingEnabled: {
      category: "general",
      forward: "_IsSnappingEnabled",
      autoScriptInterface: true,
      highlight: false,
      listName: "Is snapping enabled",
      displayText: "{my}: Is snapping enabled",
      description: "Is snapping enabled",
    },
  },
  Exps: {
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
    ScrollX: {
      category: "general",
      forward: "_ScrollX",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll X",
    },
    ScrollY: {
      category: "general",
      forward: "_ScrollY",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll Y",
    },
    ScrollProgressX: {
      category: "general",
      forward: "_ScrollProgressX",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll progress X",
    },
    ScrollProgressY: {
      category: "general",
      forward: "_ScrollProgressY",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll progress Y",
    },
    ScrollWidth: {
      category: "general",
      forward: "_ScrollWidth",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll width",
    },
    ScrollHeight: {
      category: "general",
      forward: "_ScrollHeight",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Scroll height",
    },
    MaxSpeed: {
      category: "general",
      forward: "_MaxSpeed",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Max speed",
    },
    Deceleration: {
      category: "general",
      forward: "_Deceleration",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Deceleration",
    },
    VectorX: {
      category: "properties",
      forward: "_VectorX",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Vector X",
    },
    VectorY: {
      category: "properties",
      forward: "_VectorY",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Vector Y",
    },
    MarginLeft: {
      category: "properties",
      forward: "_MarginLeft",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Margin left",
    },
    MarginTop: {
      category: "properties",
      forward: "_MarginTop",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Margin top",
    },
    MarginRight: {
      category: "properties",
      forward: "_MarginRight",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Margin right",
    },
    MarginBottom: {
      category: "properties",
      forward: "_MarginBottom",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Margin bottom",
    },
    OverscrollX: {
      category: "properties",
      forward: "_OverscrollX",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Overscroll",
    },
    OverscrollY: {
      category: "properties",
      forward: "_OverscrollY",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Overscroll",
    },
    MaxOverScroll: {
      category: "properties",
      forward: "_MaxOverScroll",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Max overscroll",
    },
    Speed: {
      category: "general",
      forward: "_Speed",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Speed",
    },
    OverScrollPushBack: {
      category: "properties",
      forward: "_OverScrollPushBack",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "OverScrollPushBack",
    },
    SnapSpeedThreshold: {
      category: "properties",
      forward: "_SnapSpeedThreshold",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Snap speed threshold",
    },
    SnapDistanceThreshold: {
      category: "properties",
      forward: "_SnapDistanceThreshold",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Snap distance threshold",
    },
    SnapSpeed: {
      category: "properties",
      forward: "_SnapSpeed",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Snap speed",
    },
    NbColumns: {
      category: "properties",
      forward: "_NbColumns",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Nb columns",
    },
    NbRows: {
      category: "properties",
      forward: "_NbRows",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      description: "Nb rows",
    },
  },
};