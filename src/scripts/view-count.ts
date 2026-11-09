const loadViewCounts=()=>{
  document.querySelectorAll<HTMLElement>('[data-view-count]:not([data-view-loaded])').forEach(async element=>{
    element.dataset.viewLoaded='true';
    const method=element.dataset.viewMode==='increment'?'POST':'GET';
    const target=method==='POST'
      ? window.location.href
      : new URL(element.dataset.viewHref ?? '',window.location.href).href;
    try {
      const response=await fetch('https://bsz.iirose.cn/api',{
        method,
        headers:{'x-bsz-referer':target},
        cache:'no-store'
      });
      if(!response.ok) throw new Error(`View count request failed with status ${response.status}.`);
      const result=await response.json();
      const count=Number(result.data?.page_pv);
      if(result.success!==true||!Number.isFinite(count)) throw new Error('View count response did not contain a valid page count.');
      const value=element.querySelector<HTMLElement>('[data-view-value]');
      if(!value) throw new Error('View count value element is missing.');
      value.textContent=count.toLocaleString('en-US');
      element.setAttribute('aria-label',`${count.toLocaleString('en-US')} views`);
      element.title=`${count.toLocaleString('en-US')} views`;
    } catch(error) {
      element.setAttribute('aria-label','Views unavailable');
      element.title='Views unavailable';
      const value=element.querySelector<HTMLElement>('[data-view-value]');
      if(value) value.textContent='—';
      console.error('Unable to load essay view count.',error);
    }
  });
};

loadViewCounts();
document.addEventListener('astro:page-load',loadViewCounts);
