const testimonials = {
    "label": "Testimonials",
    "name": "testimonials",
    "widget": "list",
    // "summary": "{{fields.quote}} - {{fields.author.name}}",
    "fields": [{
            "label": "Quotes",
            "name": "quote",
            "widget": "string",
            "default": "Everything is awesome!"
        },
        { 
            "label": "Author",
            "name": "author",
            "widget": "object",
            "fields": [{
                    "label": "Name",
                    "name": "name",
                    "widget": "string",
                    "default": "Emmet"
                }
            ]
        }
    ]
}

export default testimonials