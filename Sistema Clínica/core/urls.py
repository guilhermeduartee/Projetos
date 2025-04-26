from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, PacienteViewSet, ProdutoViewSet, ProcedimentoViewSet, relatorio_mensal
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'pacientes', PacienteViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'procedimentos', ProcedimentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('relatorio_mensal/', relatorio_mensal, name='relatorio_mensal'),
]
