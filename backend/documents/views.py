from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import Document


@csrf_exempt
@require_POST
def upload_document(request):
    uploaded = request.FILES.get('file')
    if not uploaded:
        return JsonResponse({'error': 'No file provided'}, status=400)

    doc = Document.objects.create(name=uploaded.name, file=uploaded)
    return JsonResponse({
        'id': doc.id,
        'name': doc.name,
        'location': doc.file.name,
        'url': doc.file.url,
    }, status=201)
