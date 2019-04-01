# GDPR Consent
A super flexible GDPR consent solution that, if implemented correctly, will make your site GDPR compliant.

# Customisable settings
This project allows you to specify custom settings.
To declare these settings you need to put a script tag above the library include containing the following:
```html
<script>
  window.gdprconsent = {
    sidebarBackground: "<ANY_CSS_COLOUR_VALUE>",
    sidebarTitleTextColour: "<ANY_CSS_COLOUR_VALUE>",
    services: [
      {
        storage_key: '<ANY_KEY_YOU_WANT>',
        title: '<TITLE_IN_SIDEBAR>',
        disable: function() {
          // Callback used to disable the functionality
        },
        enable: function() {
          // Callback to enable the functionality
        },
      }
    ]
  };
</script>
```

