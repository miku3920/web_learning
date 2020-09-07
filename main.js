$(() => {
	// 建立 Model
	const MyDataModel = Backbone.Model.extend({ defaults: null });
	const myDataModel = new MyDataModel();

	// 建立 Collection
	const MyDataCollection = Backbone.Collection.extend({
		model: MyDataModel,
		url: 'api/mydata',
	});
	const myDataCollection = new MyDataCollection();

	// fetch 資料
	myDataCollection.fetch();

	// 建立 View
	const MyDataItemView = Backbone.View.extend({

		initialize() {
			this.listenTo(myDataCollection, 'add', this.render);
		},

		tmp: _.template($('#mydata_tmp').html()),

		render(item) {
			const data = item.attributes;
			$('#list').append(this.tmp(data));
			return this;
		},
	});

	const myDataItemView = new MyDataItemView({
		model: MyDataCollection,
	});

	function onclickFind(event) {
		const id = $('#my_id').val();
		const result = myDataCollection.get(id);
		$('#list').empty();
		myDataItemView.render(result);
	}

	$('#findBtn').bind('click', onclickFind);
});
