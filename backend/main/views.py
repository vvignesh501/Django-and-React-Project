from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from typing import List, Union
from django.db.models import Sum, Q
from .models import EmployeeRelation, SalesLines
from .serializers import EmployeeRelationSerializer, SalesLinesSerializer
from rest_framework.response import Response
from datetime import datetime
from backend.helpers import date_range_intersect
from .sqlite import sales_rep_total_revenue
from django.core import serializers
from django.http import JsonResponse


@api_view(["GET", "PUT", "DELETE"])
def get_revenue_by_sales_rep(request, user_id):
    try:
        employee = SalesLines.objects.filter(rep_id=user_id)
    except SalesLines.DoesNotExist:
        return JsonResponse({"error": {"code": 404, "message": "Article not found"}}, status=status.HTTP_404_NOT_FOUND, safe=False)

    if request.method == "GET":

        # data = await sales_rep_total_revenue(user_id)
        employee = SalesLines.objects.filter(rep_id=user_id).values("rep_id").annotate(revenue = Sum('revenue'))
        #employee = SalesLines.objects.filter(rep_id=user_id).values("revenue").annotate(revenue=Sum("revenue"))
        return JsonResponse({"revenue": list(employee)})
        # serializer = SalesLinesSerializer(employee, many=True)
        #return JsonResponse(employee, safe=False)

    elif request.method == "POST":
        serializer = SalesLinesSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, safe=False)
