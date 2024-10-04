---
date: <% tp.date.now("YYYY-MM-DD") %>
bebe: Name of Your Baby
edades: 6 meses
almuerzo:
merienda:
---

# Registro de Nutrición de <% tp.date.now("YYYY-MM-DD") %>

## Almuerzo: <%*tp.file.cursor(3)%>

## Nutrientes del Almuerzo:

<% tp.user.findNutrients(tp) %>

## Merienda: <%*tp.file.cursor(4)%>

## Nutrientes de la Merienda:

<% tp.user.findNutrients(tp) %>