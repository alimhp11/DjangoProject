from django.urls import path
from . import views
app_name = 'home_app'

urlpatterns = [
    path('',views.NewList.as_view(),name='category'),
    path('news/<str:slug>/<int:pk>',views.NewDetail.as_view(),name='news'),
    path('category/<int:pk>',views.CategoryList.as_view(),name='cat_detail'),

]