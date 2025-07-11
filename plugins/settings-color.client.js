// plugins/settings-color.client.js
export default async () => {
    try {
        const response = await fetch('/api/settings')
        const settings = await response.json()
        if (settings.primaryColor || '#d63384') {
            document.documentElement.style.setProperty('--primary-color', settings.primaryColor || '#d63384')
        }
    } catch (e) {
        // fallback or handle error
        document.documentElement.style.setProperty('--primary-color', '#d63384')
    }
}
