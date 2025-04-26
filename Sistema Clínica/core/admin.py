from django.contrib import admin
from .models import Usuario, Paciente, Produto, Procedimento

admin.site.register(Usuario)
admin.site.register(Paciente)
admin.site.register(Produto)
admin.site.register(Procedimento)
