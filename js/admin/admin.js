// ==== Delegator ==
  if(window.tinyMceWysiwygSetup)
  {
    tinyMceWysiwygSetup.prototype.originalGetSettings = tinyMceWysiwygSetup.prototype.getSettings;
    tinyMceWysiwygSetup.prototype.getSettings = function(mode)
    {
        var settings = this.originalGetSettings(mode);

        //disables the forced <p></p> that gets added to the content
        settings.forced_root_block = false;

        //allows listed elements to be seen as valid
        settings.extended_valid_elements = 'figure[*],aside[role|class|id],section[*],input[placeholder|id|accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value]';

        //certain elements need particular children
        settings.valid_children = '+a[h1|h2|h3|h4]';

        //creates a div wrapper style for internal elements
        settings.style_formats = [
          {title: 'Div Wrapper', block: 'div', classes: 'cms'}
        ];

        //redefines elements such that they will have classes automatically
        settings.formats = {
          bold:   {block: 'b', classes: 'cms'},
          italic: {block: 'i', classes: 'cms'},
          p:      {block: 'p', classes: 'cms'},
          h1:     {block: 'h1', classes: 'cms'},
          h2:     {block: 'h2', classes: 'cms'},
          h3:     {block: 'h3', classes: 'cms'},
          h4:     {block: 'h4', classes: 'cms'}
        };

        return settings;
    }
  }