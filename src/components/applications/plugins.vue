<template>
    <div class="h7-container">
        <a-row>
            <a-col :md="24">
                <a-card title="插件">
                    <a-table :columns="pluginsTableColums" :data-source="pluginsInfo">
                        <template v-slot:states="{ text: states }">
                            <span>
                                <a-tag v-for="tag in states" :key="tag" :color="getStateTagColor(tag)">
                                    {{ tag }}
                                </a-tag>
                            </span>
                        </template>
                    </a-table>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pluginsInfoTimer: null,
                pluginsInfo: [],
                pluginsTableColums: [{
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: '作者',
                    dataIndex: 'author',
                    key: 'author',
                }, {
                    title: '版本',
                    dataIndex: 'version',
                    key: 'version',
                }, {
                    title: '状态',
                    dataIndex: 'states',
                    key: 'states',
                    slots: {
                        customRender: 'states'
                    },
                }]
            }

        },
        methods: {
            getStateTagColor(name) {
                if (name == "已关闭") {
                    return 'purple';
                } else if (name == "关闭中") {
                    return 'orange';
                } else if (name == "启动中") {
                    return 'cyan';
                } else if (name == "运行中") {
                    return 'green';
                } else if (name == "系统插件") {
                    return 'blue';
                } else if (name == "扩展插件") {
                    return 'pink';
                }
            },
            buildPluginsInfo(pluginItem) {
                let item = {
                    name: pluginItem.name,
                    author: pluginItem.author,
                    version: pluginItem.version,
                    key: pluginItem.key,
                    states: []
                }
                if (pluginItem.state == "0") {
                    item.states.push('已关闭')
                } else if (pluginItem.state == "1") {
                    item.states.push('关闭中')
                } else if (pluginItem.state == "2") {
                    item.states.push('启动中')
                } else if (pluginItem.state == "3") {
                    item.states.push('运行中')
                }

                if (pluginItem.is_sys) {
                    item.states.push('系统插件')
                } else {
                    item.states.push('扩展插件')
                }
                return item;

            },
            getPluginsInfo() {
                this.axios({
                    method: "get",
                    url: "/cgi-bin/plugins_info",
                    timeout: 1000
                }).then(data => {
                    if (data.data.code == 0) {
                        this.pluginsInfo = [];
                        for (let i = 0; i < data.data.plugins.length; i++) {
                            this.pluginsInfo.push(this.buildPluginsInfo(data.data.plugins[i]));
                        }
                    }

                }).catch(() => {});
            }
        },
        created() {
            this.getPluginsInfo();
            this.pluginsInfoTimer = window.setInterval(this.getPluginsInfo, 1000);
        },
        beforeUnmount() {
            window.clearInterval(this.pluginsInfoTimer);
        }
    }
</script>

<style>

</style>