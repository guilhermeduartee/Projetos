from rest_framework import viewsets
from .models import Usuario, Paciente, Produto, Procedimento
from .serializers import UsuarioSerializer, PacienteSerializer, ProdutoSerializer, ProcedimentoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class ProcedimentoViewSet(viewsets.ModelViewSet):
    queryset = Procedimento.objects.all()
    serializer_class = ProcedimentoSerializer

@api_view(['GET'])
def relatorio_mensal(request):
    total_procedimentos = Procedimento.objects.all().aggregate(Sum('valor'))
    total_produtos = Produto.objects.all().aggregate(Sum('valor'))
    return Response({
        'total_procedimentos': total_procedimentos,
        'total_produtos': total_produtos
    })
