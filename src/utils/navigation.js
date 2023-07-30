const checkIsNavigationSupported = () => {
  return Boolean(document.startViewTransition)
}

export const startViewTransition = () => {
  if (!checkIsNavigationSupported()) return

  window.navigation.addEventListener('navigate', (event) => {
    const toUrl = new URL(event.destination.url)

    // Es una página externa
    if (location.origin !== toUrl.origin) return

    // Si es una navegación en el mismo sitio o dominio (origin)
    event.intercept({
      async handler () {
        // Vamos a cargar la página de destino utilizando fetch para obtener el HTML
        const response = await fetch(toUrl.pathname) // Obtenemos el HTML
        const text = await response.text() // Devuelve un texto plano
        // Quedarnos sólo con el contenido del html dentro de la etiqueta <body>
        // Usamos un regex para extraer
        const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
        // Utilizar la api de View Transition API
        document.startViewTransition(() => {
          document.body.innerHTML = data
          // El scroll hacia arriba de la página
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}
