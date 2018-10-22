from django.shortcuts import render, get_object_or_404
from .models import Contact
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def contacts_list(request):
    contacts = Contact.objects.order_by('-last_name').filter(user_id=request.user.id)
    return render(request, 'contacts/contacts_list.html', {'contacts': contacts})

@login_required
def contacts_show(request, pk):
    contact = get_object_or_404(Contact, id=pk, user_id=request.user.id)
    return render(request, 'contacts/contacts_show.html', {'contact': contact})
