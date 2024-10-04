---
date: <% tp.date.now("YYYY-MM-DD") %>
bebe: Name of Your Baby
edades: 6 meses
almuerzo:
merienda:
---

# Registro de Nutrición de <% tp.date.now("YYYY-MM-DD") %>

## Almuerzo: 
<%*tp.file.cursor(1)%>

## Nutrientes del Almuerzo:

<% tp.user.findNutrients(tp) %>[[Comida 2024-10-10]]

## Merienda: 
<%*tp.file.cursor(2)%>

## Nutrientes de la Merienda:

<% tp.user.findNutrients(tp) %>